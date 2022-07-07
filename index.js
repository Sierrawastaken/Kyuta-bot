import discord from 'discord.js'
import config from './config.json' assert { type: "json" }
import { serverListen } from './name/serverConnect.js'
import fs from "fs"

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
            
            if (args[0] === "manual") {
                users.push({
                    name: args[1],
                    avatar: message.author.avatarURL()
                })
            } else {
                for (let i = 0; i < data.length; i++) {
                    if (users[i].name === message.author.username) return message.channel.send("You have already been registered!")   
                }

                users.push({
                    name: `${message.author.username}`,
                    avatar: message.author.avatarURL()
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
            serverListen(message.channelId, discordClient, host, port, version)
            message.channel.send("Started listening!")
        } else {
            serverListen(message.channelId, discordClient, config.host, config.port, config.version)
            message.channel.send(`Started listening to ${config.host}:${config.port} on version ${config.version}`)
        }
        
    }
})

discordClient.login(config.token)