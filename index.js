import discord from 'discord.js'
import config from './config.json' assert { type: "json" }
import { serverListen } from './name/serverConnect.js'

const discordClient = new discord.Client({
    intents:[
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS",
    ]
})

discordClient.name = config.botName

discordClient.on("ready", () => {
    console.log(`logged in as ${discordClient.name}`)
})

discordClient.on('messageCreate', (message) => {
    if (!message.content.startsWith(config.prefix)) return  
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g)
    const msgStr = args.shift().toLowerCase()
    
    if (msgStr === "listen") {
        serverListen(message.channelId, discordClient)
        message.channel.send("Started listening!")
    }
})

discordClient.login(config.token)