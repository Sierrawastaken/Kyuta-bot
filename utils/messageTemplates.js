import config from '../config.json' assert { type: "json" }
import webhook from 'webhook-discord'
import { deathPackets } from './deathPackets.js'
import { discordClient } from '../index.js'
const Hook = new webhook.Webhook(config.webhook)


export function chatMessage(user, content, colour) {
    let now = new Date()
    const message = new webhook.MessageBuilder()
        .setName(user)
        .setColor(colour)
        //.setTitle(content)
        .setDescription(`**${content}**`)
        .setFooter(now)
    return Hook.send(message)
}

export function connMessage(user, action, colour) {
    let now = new Date()
    const message = new webhook.MessageBuilder()
        .setName("Server")
        .setColor(colour)
        .setDescription(`**${user[0]} has ${action} the server**`)
        .setFooter(now)
    return Hook.send(message)
}

export function deathMessage(user, type, colour) {
    let now = new Date()
    if (user.length > 1 ) {
        type = deathPackets[type].replace("%1%", user[1]).replace("%2%", user[0])
    } else {
        type = deathPackets[type].replace("%1%", user[0])
    } 
    const message = new webhook.MessageBuilder()
        .setName("Server")
        .setColor(colour)
        .setDescription(`**${type}**`)
        .setFooter(now)
    return Hook.send(message)
}
//check too see if a user in that server has the same nickname as the message sender
//if so change the pfp to that - maybe have user register a avatar if they want