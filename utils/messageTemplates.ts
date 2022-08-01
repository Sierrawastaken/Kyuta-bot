const config = require("../../data/config.json")
const webhook = require("webhook-discord")
import { userCorrection, parseCommand } from './utils'
const users = require('../../data/users.json')
import { MessageEmbed, Message } from 'discord.js'
const serverData = require("../../data/serverDat.json")

const Hook = new webhook.Webhook(config.webhook)
const now = new Date().toUTCString()

/**
 * Helps translate a packet message into a webhook
 * @param user - who sent the message
 * @param content - message content
 * @param colour - the colour you want the embed
 * @returns Sent webhook
 */
export function chatMessage(user: string, content: string, colour: string) {
    let avatar
    for (let i = 0; i < users.length; i++) {
        if (users[i].gamertag === user) {
            avatar = users[i].avatar
            colour = users[i].colour
            user = `${users[i].gamertag} - ${users[i].name}`
            break
        }
    }

    let message = new webhook.MessageBuilder()
        .setAvatar(avatar)
        .setName(user)
        .setColor(colour)
        .setDescription(`**${content}**`)
        .setFooter(`- ${now}`, config.botAv)
    return Hook.send(message)
}

/**
 * Translates a join/leave packet into a webhook
 * @param user - who connected/disconnected
 * @param action - connection/disconnection
 * @param colour - colour of the embed
 * @returns Sent webhook
 */
export function connMessage(user: string, action: string, colour: string) {
    let message = new webhook.MessageBuilder()
        .setName("Server")
        .setColor(colour)
        .setDescription(`**${user[0]} has ${action} the server**`)
        .setFooter(`- ${now}`, config.botAv)
    return Hook.send(message)
}

/**
 * Translates a death message into a webhook
 * @param packet - the entire packet with the rawdeath message
 * @param colour - the colour of the embed
 * @returns Sent webhook
 */
export function deathMessage(packet: JSON, colour: string) {
    let message = new webhook.MessageBuilder()
        .setName("Server")
        .setColor(colour)
        .setDescription(`**${userCorrection(packet)}**`)
        .setFooter(`- ${now}`, config.botAv)
    return Hook.send(message)
}

/**
 * Translates the command packet into a webhook
 * @param packet - the packet.message that contains the rawcommand string
 * @param colour - the colour of the embed
 * @returns Sent webhook
 */
export function commandOutput(packet: string, colour: string) {
    let response, title
    response = parseCommand(JSON.parse(packet))
    
    if (response[0][0] === "Unknown") {
        title = "TrapDoor Command ran:"
    } else {
        title = `Command ran by ${response[0][0]}`
    }

    let message = new webhook.MessageBuilder()
        .setName("Server")
        .setTitle(title)
        .setColor(colour)
        .setDescription(`**RESPONSE**:\n${response[1]}`)
        .setFooter(`- ${now}`, config.botAv)

    return Hook.send(message)
}

/**
 * Sends a server info embed to the channel it was triggered in
 * @param message - the triggering message to return to
 * @returns Sent MessageEmbed
 */
export function serverInfo(message: Message) {
    let serverInfoEmbed = new MessageEmbed()
            .setColor("#52c8db")
            .setTitle("Important server information")
            .setDescription(`${serverData.params.world_name}:`)
            .addFields(
                { name: "Commands enabled", value: `${serverData.params.enable_commands}‎`, inline: true },
                { name: "Gamemode", value: `${serverData.params.world_gamemode}‎`, inline: true },
                { name: "Difficulty", value: `${serverData.params.difficulty}‎`, inline: true },
                { name: "Version", value: `${serverData.params.engine}‎`, inline: true },
                { name: "Achievements Disabled", value: `${serverData.params.achievements_disabled}‎`, inline: true },
                { name: "Force texturepacks", value: `${serverData.params.is_texturepacks_required}‎`, inline: true }
            )
            .setFooter({
                text: "Created by Sierra#7079",
                iconURL: config.botAv
            })
    
    if (config.detailedInfo) {
        serverInfoEmbed.addFields(
            { name: "World Spawn", value: `${serverData.params.spawn_position.x}, ${serverData.params.spawn_position.y}, ${serverData.params.spawn_position.z}‎`, inline: true },
            { name: "New Nether", value: `${serverData.params.is_new_nether}‎`, inline: true },
            { name: "Level Id", value: `${serverData.params.level_id}‎`, inline: true },
            { name: "Movement Authority", value: `${serverData.params.movement_authority}‎`, inline: true },
            { name: "Current Tick", value: `${serverData.params.current_tick[1]}‎`, inline: true },
            { name: "Enchantment Seed", value: `${serverData.params.enchantment_seed}‎`, inline: true },
            { name: "World Size", value: `${serverData.params.limited_world_length} * ${serverData.params.limited_world_width}‎`, inline: true },
            { name: "Seed", value: `${serverData.params.seed}‎`, inline: true }
        )
    }

        return message.channel.send(serverInfoEmbed)
}

/**
 * Sends a help embed to the channel it was triggered in
 * @param message - the triggering message to return to
 * @returns Sent embed
 */
export function helpEmbed(message: Message) {
    let helpEmbed = new MessageEmbed()
            .setColor("#52c8db")
            .setTitle("Kyuta Help Commands")
            .setURL("https://github.com/Sierrawastaken/Kyuta-bot")
            .setThumbnail(config.botAv)
            .setDescription("Kyuta is discord chat-bridge integration for minecraft. Full documentation is on [GitHub](https://github.com/Sierrawastaken/Kyuta-bot)\n\n")
            .addFields(
                { name: "Help", value: "Displays this message", inline: false },
                { name: "Register", value: "Registers the user to an internal database for personalized embed messages", inline: false },
                { name: "Listen", value: "Attaches to the indicated server to bridge messages", inline: false },
                { name: "Listenhelp", value: "Brings up more info on server listing", inline: false },
                { name: "Ping", value: "Pings queried server and returns basic info", inline: false }
            )
            .setFooter({
                text: "Created by Sierra#7079",
                iconURL: config.botAv
            })

        return message.channel.send(helpEmbed)
}

/**
 * Sends a server help embed to the channel it was triggered in
 * @param message - the triggering message to return to
 * @returns Sent embed
 */
export function serverHelp(message: Message) {
    let serverEmbed = new MessageEmbed()
            .setColor("#52c8db")
            .setTitle("Kyuta Server Listening Commands")
            .setURL("https://github.com/Sierrawastaken/Kyuta-bot#commands---usage")
            .setThumbnail(config.botAv)
            .setDescription(`Server listen can be iniated with ${config.prefix}listen. To indicate which server you would like to listen to either hardcode it into \`config.json\` or set \`DynamicListening\` to true. If DynamicListening is set to true indicate the server with the following syntax:\n \`${config.prefix}listen host, port, version\`.`)
            .addFields(
                { name: "Supported Versions", value: "1.16.201, 1.16.210, 1.16.220, 1.17.0, 1.17.10, 1.17.30, 1.17.40, 1.18.0, 1.18.11, 1.18.30, 1.19.1", inline: false },
                { name: "Running raw commands", value: `To run raw commands to the server run the command as: \`${config.runRawPrefix}setblock 1 20 1 glass\``, inline: false },
                { name: "Stopping the bridge", value: `To stop the bridge simply run: \`${config.prefix}break\``, inline: false }
            )
            .setFooter({
                text: "Created by Sierra#7079",
                iconURL: config.botAv
            })

        return message.channel.send(serverEmbed)
}