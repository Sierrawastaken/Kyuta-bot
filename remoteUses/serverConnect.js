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
            commandOutput(String(packet.message))
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
}
/**
    List of all packets that ive found:
    move_entity_delta
    move_player
    tick_sync
    entity_event
    level_chunk
    network_chunk_publisher_update
    play_status
    set_entity_data
    set_entity_motion
    set_health
    chunk_radius_update
    add_entity
    update_attributes
    set_time
    player_list
    remove_entity
    text
    mob_equipment
    add_player
    respawn
    available_commands
    crafting_data
    player_hotbar
    inventory_content
    player_fog
    available_entity_identifiers
    biome_definition_list
    adventure_settings
    game_rules_changed
    set_commands_enabled
    set_difficulty
    set_spawn_position
    item_component
    start_game
    level_sound_event
    network_settings
    resource_packs_info
    server_to_client_handshake
 **/