import { ping } from 'bedrock-protocol'
import { MessageEmbed } from 'discord.js'
import config from '../config.json' assert { type: "json" }

export async function pingServer (host, port) {
    
    let response = await ping({ 
        host: host, 
        port: parseInt(port) 
    })
    console.log(response.motd)
    console.log(response.header)
    console.log(response.playersOnline)
    console.log(response.playersMax)
    console.log(response.gamemode)
    console.log(response.serverId)
    console.log(response.protocol)

    let embed = new MessageEmbed() 
        .setColor("#52c8db")
        .setTitle(`${host}s`)
        .setDescription(`${response.motd}d‎`)
        .addFields(
            { name: "Header", value: `${response.header}d‎`, inline: false},
            { name: "Players Online", value: `${response.playersOnline}d‎`, inline: false},
            { name: "Max Players", value: `${response.playersMax}d‎`, inline: false},
            { name: "Gamemode", value: `${response.gamemode}d‎`, inline: false},
            { name: "Server ID", value: `${response.serverId}d‎`, inline: false},
            { name: "Protocol", value: `${response.protocol}d‎`, inline: false},
        )
        .setFooter({
            text: ":)",
            iconURL: config.botAv
        })
        
    return embed
}