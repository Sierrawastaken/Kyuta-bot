import config from '../config.json' assert { type: "json" }
import webhook from 'webhook-discord'
import { deathPackets /*, commandPackets */} from './packetTranslations.js'
import users from './users.json' assert { type: "json" }
import discord from 'discord.js'

const Hook = new webhook.Webhook(config.webhook)
const now = new Date().toUTCString()
let avatar, gamename, user

export function chatMessage(user, content, colour) {
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
        .setFooter(` - ${now}`, config.botAv)
    return Hook.send(message)
}

export function connMessage(user, action, colour) {
    let message = new webhook.MessageBuilder()
        .setName("Server")
        .setColor(colour)
        .setDescription(`**${user[0]} has ${action} the server**`)
        .setFooter(` - ${now}`, config.botAv)
    return Hook.send(message)
}

export function deathMessage(user, type, colour) {
    if (user.length > 1 ) {
        type = deathPackets[type].replace("%1%", user[1]).replace("%2%", user[0])
    } else {
        type = deathPackets[type].replace("%1%", user[0])
    } 
    let message = new webhook.MessageBuilder()
        .setName("Server")
        .setColor(colour)
        .setDescription(`**${type}**`)
        .setFooter(` - ${now}`, config.botAv)
    return Hook.send(message)
}

//putting this here for testing so i dont have to worry about loops
const commandPackets = {
    'commands.summon.success': `Object successfully summoned`,
    'commands.clear.failure.no.items': `Could not clear the inventory of %1$s, no items to remove`,
    'commands.clear.success': `Cleared the inventory of %1$s, removing %2$d items`,
}

export function commandOutput(pMessage) {
    let filler, completedArray, parsedMessage, command
    if (!config.TapdoorInjected) {
        
       let filer = pMessage.toJSON()
        console.log(filler)
        
        /*
        console.log(pMessage)
        filler = pMessage.slice(43, pMessage.length - 5)
        filler = filler.split("},{\"")
        parsedMessage = filler[2].split("\",\"with\":{\"rawtext\":")
        filler.splice(2,1)
        completedArray = filler.concat(parsedMessage)
        //                                  [
        //args[0] = user who ran command      '"ttvsierra117"',
        //args[1] = text                      '"text":": "',
        //args[2] = more text                 '"text":"]"',
        //args[3] = command ran               '"translate":"commands.summon.success'
        //args[4] = even more text            'null}'
        //                                  ]
        
        console.log(completedArray)
        if (completedArray[1].slice(7) === "\": \"" && completedArray[2].slice(7) === "\"]\"" && completedArray[4].slice(4,1) === "null" ) {
            command = commandPackets[completedArray[3].slice(13)]
        }*/

        let message = new webhook.MessageBuilder()
        .setName("Server")
        .setTitle(`Command ran by ${completedArray[0]}:`)
        .setColor("#bd4f0d")
        .setDescription(command)
        .setFooter(` - ${now}`, config.botAv)

        return Hook.send(message)
    }
    
}

export function helpEmbed(channel) {
    let embed = new discord.MessageEmbed()
            .setColor("#52c8db")
            .setTitle("Kyuta Help Commands")
            .setURL("https://github.com/Sierrawastaken/Kyuta-bot#README")
            .setThumbnail(config.botAv)
            .setDescription("Kyuta is discord chat-bridge integration for minecraft. Full documentation is on [GitHub](https://github.com/Sierrawastaken/Kyuta-bot#README)\n\n")
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
            .setURL("https://github.com/Sierrawastaken/Kyuta-bot#README")
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
//check too see if a user in that server has the same nickname as the message sender
//if so change the pfp to that - maybe have user register a avatar if they want