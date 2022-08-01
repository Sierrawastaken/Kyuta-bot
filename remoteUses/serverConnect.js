import bedrock from 'bedrock-protocol'
import config from '../data/config.json' assert { type: "json" }
import { chatMessage, connMessage, deathMessage, commandOutput } from '../utils/messageTemplates.js'
import { hasAttachment } from '../utils/utils.js'
import fs from 'fs/promises'
import formating from '../data/formating.json' assert { type: "json" }

//change this if you want no randomized endings
const random = Math.floor(Math.random() * 101)

let bridgedMessage

export async function serverListen(channelId, discordClient, host, port, version) {
    
    const bedrockClient = bedrock.createClient({
        host: host,
        port: port,
        version: version,
        username: `Kyuta${random}`,
        offline: true
    })

    bedrockClient.on('packet', async (packet) => {
        if (packet.name != 'start_game') return


        let json = JSON.stringify(packet.data, (key, value) =>
            typeof value === "bigint" ? value.toString() + "n" : value
        , 4)

        await fs.unlink('./remoteUses/serverDat.json', function (err) {
            if (err) throw new Error
        })

        await fs.appendFile('./remoteUses/serverDat.json', json, (err) => {
            if (err) throw new Error
        })

        return
    })
    /*
    //SCOREBOARDS

    //get unique user entity ID
    bedrockClient.on('add_player', async (packet) => {
        
        let json = JSON.stringify(packet.username && packet.entity_id_self, (key, value) =>
            typeof value === "bigint" ? value.toString() + "n" : value
        , 4)

        await fs.appendFile('./usertempdata.json', json, (err) => {
            if (err) throw new Error
        })
    })

    //actually get the broken block
    bedrockClient.on('update_block', (updatePacket) => {
        // 134 is the runtime id that indicates its a broken block
        if (updatePacket.block_runtime_id != 134) return

        //checking for when an entity is spawned
        bedrockClient.once('add_item_entity', (itemPacket) => {
            let updateCoords = [updatePacket.position.x, updatePacket.position.y, updatePacket.position.z]
            let itemCoords = [itemPacket.position.x, itemPacket.position.y, itemPacket.position.z]
        })
    })
    */
    
    
    bedrockClient.on('text', (packet) => {
        if (packet.type === "chat" && packet.source_name != `Kyuta${random}`) {
            chatMessage(packet.source_name, packet.message, "#52c8db")
        } 
        if (packet.type === "translation") {
            if (!packet.message.startsWith("death")) {
                if (packet.message.endsWith("joined")) {
                    connMessage(packet.parameters, "joined", "#195905")
                } else { connMessage(packet.parameters, "left", "#c41e3a") }
            } else {
                deathMessage(packet, "#002e63")
            }
        }
        if (packet.type === "json") {
            if (config.sendCommands) commandOutput(packet.message, "#bd4f0d")
            fs.appendFile('./utils/commandLog.txt', `${packet.message}`)
        }
        
    })

    discordClient.on('messageCreate', async (message) => {
        message.content = message.content.toLowerCase()
        if (message.channel.id != channelId) return
        if (message.author.bot) return

        if (message.content === `${config.prefix}break`) {
            bedrockClient.disconnect()

            await fs.unlink('./remoteUses/serverDat.json', function (err) {
                if (err) throw new Error
            })
    
            message.channel.send("Stopped listening to the server!")
            console.log("Stopped listening to the server")
            return
        }


        //keep commands above ^^^^
        if (message.content.startsWith(config.prefix)) return


        if (message.content.startsWith(config.runRawPrefix)) {
            let command = message.content.slice(config.runRawPrefix.length).trim()
            if(command.startsWith("/")) command = command.slice(1)

            bedrockClient.queue('command_request', {
            command: `/${command}`,
            origin: {
                size: 0,
                type: 0,
                uuid: "",
                request_id: "",
                player_entity_id: "",
            },
            interval: false,
            })

            return //message.channel.send("Command ran successfully ")
        }

        for (let i = 0; i < formating.length; i++) {
            if (message.content.startsWith(formating[i].discord)) {
                bridgedMessage = message.content.slice(formating[i].discord.length, -formating[i].discord.length)
                bridgedMessage = formating[i].minecraft + bridgedMessage + "§r"
                break
            } else {
                bridgedMessage = message.content
            }
        }

        if (bridgedMessage === "" && hasAttachment(message)) {
            bridgedMessage = "[Image]"
        } else if (bridgedMessage != "" && hasAttachment(message)) {
            bridgedMessage + " (and an image)"
        }

        if (!message.reference) {
            bedrockClient.queue('command_request', {
                command: `/tellraw @a {"rawtext":[{"text":"§r§4[Discord]§f ${message.author.username}: ${bridgedMessage}"}]}`,
                origin: {
                  size: 0,
                  type: 0,
                  uuid: "",
                  request_id: "",
                  player_entity_id: "",
                },
                interval: false,
            })
        } else {
            let repliedMessage = await message.fetchReference()
            let replie = repliedMessage.author.username

            bedrockClient.queue('command_request', {
                command: `/tellraw @a {"rawtext":[{"text":"§r§4[Discord]§f ${message.author.username} replying to ${replie}: ${bridgedMessage}"}]}`,
                origin: {
                    size: 0,
                    type: 0,
                    uuid: "",
                    request_id: "",
                    player_entity_id: "",
                },
                interval: false,
            })
        }
    })
}
