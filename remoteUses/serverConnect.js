import bedrock from 'bedrock-protocol'
import config from '../config.json' assert { type: "json" }
import { chatMessage, connMessage, deathMessage, commandOutput } from '../utils/messageTemplates.js'
import { hasAttachment } from '../utils/utils.js'
import fs from 'fs/promises'
import formating from '../utils/formating.json' assert { type: "json" }
const random = Math.floor(Math.random() * 101)

let bridgedMessage

export async function serverListen(channelId, discordClient, host, port, version) {

    const bedrockClient = bedrock.createClient({
        host: host,
        port: port,
        version: version,
        username: `bridgechat${random}`,
        offline: true
    })
   
    bedrockClient.on('text', (packet) => {
        if (packet.type === "chat" && packet.source_name != `bridgechat${random}`) {
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
        if (message.channel.id != channelId) return
        if (message.author.bot) return
        
        if (message.content === `${config.prefix}break`) {
            bedrockClient.disconnect()
            message.channel.send("Stopped listening to the server!")
            console.log("Stopped listening to the server")
            return
        }


        //keep commands above ^^^^
        if (message.content.startsWith(config.prefix)) return


        if (message.content.startsWith(config.runRawPrefix)) {
            let command = message.content.slice(config.runRawPrefix.length).trim()

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
                console.log(bridgedMessage)
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

    bedrockClient.on('packet', (packet) => {
        if (packet.data.name === "move_entity_delta") return
        if (packet.data.name === "move_player") return
        if (packet.data.name === "tick_sync") return
        if (packet.data.name === "entity_event") return
        if (packet.data.name === "level_chunk") return
        if (packet.data.name === "network_chunk_publisher_update") return
        if (packet.data.name === "play_status") return
        if (packet.data.name === "set_entity_data") return
        if (packet.data.name === "set_entity_motion") return
        if (packet.data.name === "set_health") return
        if (packet.data.name === "chunk_radius_update") return
        if (packet.data.name === "add_entity") return
        if (packet.data.name === "update_attributes") return
        if (packet.data.name === "set_time") return
        if (packet.data.name === "player_list") return
        if (packet.data.name === "remove_entity") return
        if (packet.data.name === "text") return
        if (packet.data.name === "mob_equipment") return
        if (packet.data.name === "add_player") return
        if (packet.data.name === "respawn") return
        if (packet.data.name === "available_commands") return
        if (packet.data.name === "crafting_data") return
        if (packet.data.name === "player_hotbar") return
        if (packet.data.name === "inventory_content") return
        if (packet.data.name === "player_fog") return
        if (packet.data.name === "available_entity_identifiers") return
        if (packet.data.name === "biome_definition_list") return
        if (packet.data.name === "adventure_settings") return
        if (packet.data.name === "game_rules_changed") return
        if (packet.data.name === "set_commands_enabled") return
        if (packet.data.name === "set_difficulty") return
        if (packet.data.name === "set_spawn_position") return
        if (packet.data.name === "item_component") return
        if (packet.data.name === "start_game") return
        if (packet.data.name === "level_sound_event") return
        if (packet.data.name === "network_settings") return
        if (packet.data.name === "resource_packs_info") return
        if (packet.data.name === "server_to_client_handshake") return
        if (packet.data.name === "creative_content") return
        if (packet.data.name === "animate") return
        if (packet.data.name === "update_block") return
        if (packet.data.name === "level_event") return
        if (packet.data.name === "add_item_entity") return
        if (packet.data.name === "update_player_game_type") return
        if (packet.data.name === "inventory_transaction") return
        if (packet.data.name === "inventory_slot") return
        if (packet.data.name === "take_item_entity") return

        console.log(packet)
    })
}