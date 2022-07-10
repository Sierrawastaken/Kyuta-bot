import discord from 'discord.js'
import config from './config.json' assert { type: "json" }
import { serverListen } from './remoteUses/serverConnect.js'
import fs from "fs"
import { pingServer } from './remoteUses/ping.js'
import bruh from './utils/users.json' assert { type: "json" }
import { helpEmbed, serverHelp } from './utils/messageTemplates.js'

let host, port, version

export const discordClient = new discord.Client({
    intents:[
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS",
    ]
})

discordClient.on("ready", () => {
    console.log(`logged in as ${discordClient.user.username}`)
})

discordClient.on('messageCreate', async (message) => {
    if (!message.content.startsWith(config.prefix)) return  
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g)
    const msgStr = args.shift().toLowerCase()
    
    if (msgStr === "register") {
        fs.readFile('./utils/users.json', 'utf8', (err, data) => {
            if (err) throw new Error(err)
            const users = JSON.parse(data)
            
            if (args[0] === "manual" && message.member.roles.has(config.adminRoleId)) {
                users.push({
                    name: `${args[1]} - ${args[2]}`,
                    avatar: args[3],
                    colour: args[4]
                })
            } else {
                for (let i = 0; i < bruh.length; i++) {
                    if (bruh[i].name === message.member.nickname) return message.channel.send("You have already been registered!")   
                }

                users.push({
                    name: `${message.member.nickname} - ${message.author.username}`,
                    avatar: message.author.avatarURL(),
                    colour: message.member.roles.color.hexColor
                })
            }

            fs.writeFileSync('./utils/users.json', JSON.stringify(users, null, 4), (err) => {
                if (err) throw new Error(err)
            })

            return message.channel.send("User registered!")
        })
        
    }

    if (msgStr === "listen") {
        if (args[0]) {
            host = args.shift()
            port = parseInt(args.shift())
            version = args.shift()
            serverListen(message.channelId, discordClient, host, port, version).catch((err) => {
                return message.channel.send("An error has occured")
            })
            message.channel.send(`Started listening to ${host}:${port} on version ${version}`)
        } /* else if (!args[0] && config.DynamicListening) {
            let collector = new discord.MessageCollector(message.channel)
            collector.addListener('messageCreate', (msg) => {
                message.channel.send("please sen")
            })
        } */ else {
            serverListen(message.channelId, discordClient, config.host, config.port, config.version)
            message.channel.send(`Started listening to ${config.host}:${config.port} on version ${config.version}`)
        }
        
    }

    if (msgStr === "ping") {
       let response = pingServer(args[0], parseInt(args[1]))
       return message.channel.send({ embeds: [response] })
    }

    if (msgStr === "help") {
        return helpEmbed(message.channel)
    } if (msgStr === "listenhelp") {
        return serverHelp(message.channel)
    }
})

discordClient.login(config.token)