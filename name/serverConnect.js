import bedrock from 'bedrock-protocol'
import config from './../config.json' assert { type: "json" }
import { chatMessage, connMessage, deathMessage } from '../utils/messageTemplates.js'
import fs from 'fs/promises'
const random = Math.floor(Math.random() * 11)

export async function serverListen(channelId, discordClient) {
    const bedrockClient = bedrock.createClient({
        host: config.host,
        port: config.port,
        version: config.version,
        username: `bridgechat${random}`,
        offline: true
    })

    bedrockClient.on('text', (packet) => {
        if (packet.type === "chat" && packet.source_name != `bridgechat${random}`) {
            chatMessage(packet.source_name, packet.message, "#52c8db", true)
        } 
        if (packet.type === "translation") {
            if (!packet.message.startsWith("death")) {
                if (packet.message.endsWith("joined")) {
                    connMessage(packet.parameters, "joined", "#195905", true)
                } else { connMessage(packet.parameters, "left", "#c41e3a", true) }
            } else {
                deathMessage(packet.parameters, packet.message, "#002e63", true)
            }
        }
        if (packet.type === "json") {
            //ill fucking parse this to be more readable later i cant be asked rn
            //fs.appendFile(commandLog, `${packet.message}`)
        }
        
    })

    discordClient.on('messageCreate', async (message) => {
        if (message.channel.id != channelId) return
        if (message.author.bot || message.author.webhook) return
        if (message.content === `${config.prefix}break`) {
            bedrockClient.disconnect()
            message.channel.send("Stopped listening to the server!")
            console.log("Stopped listening to the server")
            return
        } if (!message.reference) {
            bedrockClient.queue("command_request", {
                command: `/tellraw @a {"rawtext":[{"text":"§r§4[Discord]§f ${message.author.username}: ${message.content}"}]}`,
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

            bedrockClient.queue("command_request", {
                command: `/tellraw @a {"rawtext":[{"text":"§r§4[Discord]§f ${message.author.username} replying to ${replie}: ${message.content}"}]}`,
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