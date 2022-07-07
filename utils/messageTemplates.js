import config from '../config.json' assert { type: "json" }
import webhook from 'webhook-discord'
import { deathPackets } from './deathPackets.js'
import users from './users.json' assert { type: "json" }

const Hook = new webhook.Webhook(config.webhook)
const now = new Date()
const fa = "https://cdn.discordapp.com/avatars/989028951206813707/e5d2e5149ff5aedecbece8f0ed11f436.png?size=4096"

export function chatMessage(user, content, colour) {
    let avatar
    for (let i = 0; i < users.length; i++) {
        if (users[i].name === user) {
            avatar = users[i].avatar
            break
        }
    }
    const message = new webhook.MessageBuilder()
        .setAvatar(avatar)
        .setName(user)
        .setColor(colour)
        //.setTitle(content)
        .setDescription(`**${content}**`)
        .setFooter(` - ${now}`, fa)
    return Hook.send(message)
}

export function connMessage(user, action, colour) {
    const message = new webhook.MessageBuilder()
        .setName("Server")
        .setColor(colour)
        .setDescription(`**${user[0]} has ${action} the server**`)
        .setFooter(` - ${now}`, fa)
    return Hook.send(message)
}

export function deathMessage(user, type, colour) {
    if (user.length > 1 ) {
        type = deathPackets[type].replace("%1%", user[1]).replace("%2%", user[0])
    } else {
        type = deathPackets[type].replace("%1%", user[0])
    } 
    const message = new webhook.MessageBuilder()
        .setName("Server")
        .setColor(colour)
        .setDescription(`**${type}**`)
        .setFooter(` - ${now}`, fa)
    return Hook.send(message)
}
//check too see if a user in that server has the same nickname as the message sender
//if so change the pfp to that - maybe have user register a avatar if they want