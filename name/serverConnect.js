import bedrock from 'bedrock-protocol'
import config from './../config.json' assert { type: "json" }
import { chatMessage, connMessage, deathMessage } from '../utils/messageTemplates.js'
import fs from 'fs/promises'
const random = Math.floor(Math.random() * 11)

export function serverListen(channelId, discordClient) {
    const bedrockClient = bedrock.createClient({
        host: config.host,
        port: config.port,
        version: config.version,
        username: `user${random}`,
        offline: true
    })

    bedrockClient.on('text', (packet) => {
        console.log()
        if (packet.type === "chat" && packet.source_name != `user${random}`) {
            chatMessage(packet.source_name, packet.message, "#fbceb1", true)
        } 
        if (packet.type === "translation") {
            if (!packet.message.startsWith("death")) {
                if (packet.message.endsWith("joined")) {
                    connMessage(packet.parameters, "joined", "#195905", true)
                } connMessage(packet.parameters, "left", "#c41e3a", true)
            } else {
                deathMessage(packet.parameters, packet.message, "#002e63", true)
            }
        }
        if (packet.type === "json") {
            //ill fucking parse this to be more readable later i cant be asked rn
            //fs.appendFile(commandLog, `${packet.message}`)
        }
        
    })

    discordClient.on('messageCreate', (message) => {
        if (message.channel.id != channelId) return
        if (message.author.bot || message.author.webhook) return
        if (message.content === `${config.prefix}break`) {
            bedrockClient.disconnect()
            message.channel.send("Stopped listening to the server!")
            console.log("Stopped listening to the server")
            return
        }

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
    })
}