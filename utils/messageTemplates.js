import config from '../config.json' assert { type: "json" }
import webhook from 'webhook-discord'
import { userCorrection, parseCommand } from './utils.js'
import users from './users.json' assert { type: "json" }
import discord from 'discord.js'
import serverData from './serverDat.json' assert { type: "json" }

const Hook = new webhook.Webhook(config.webhook)
const now = new Date().toUTCString()

export function chatMessage(user, content, colour) {
    let avatar, gamename
    for (let i = 0; i < users.length; i++) {
        gamename = users[i].name.split(' ')
        if (gamename[0] === user) {
            avatar = users[i].avatar
            colour = users[i].colour
            user = users[i].name
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

export function connMessage(user, action, colour) {
    let message = new webhook.MessageBuilder()
        .setName("Server")
        .setColor(colour)
        .setDescription(`**${user[0]} has ${action} the server**`)
        .setFooter(`- ${now}`, config.botAv)
    return Hook.send(message)
}

export function deathMessage(packet, colour) {
    let message = new webhook.MessageBuilder()
        .setName("Server")
        .setColor(colour)
        .setDescription(`**${userCorrection(packet)}**`)
        .setFooter(`- ${now}`, config.botAv)
    return Hook.send(message)
}

export function commandOutput(packet, colour) {
    let response, user, title
    //[ 'ttvsierra117', ': ', 'commands.summon.success', undefined, ']' ]
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

export function serverInfo(channel) {
    let embed = new discord.MessageEmbed()
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
        embed.addFields(
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

        return channel.send({ embeds: [embed] })
}

export function helpEmbed(channel) {
    let embed = new discord.MessageEmbed()
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

        return channel.send({ embeds: [embed] })
}

export function serverHelp(channel) {
    let embed = new discord.MessageEmbed()
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

        return channel.send({ embeds: [embed] })
}