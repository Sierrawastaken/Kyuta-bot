import { ping } from 'bedrock-protocol'
import { MessageEmbed } from 'discord.js'
import config from '../config.json' assert { type: "json" }

export async function pingServer (host, port, channel) {
    
    let response = await ping({ 
        host: host, 
        port: parseInt(port) 
    })

    let embed = new MessageEmbed() 
        .setColor("#52c8db")
        .setTitle(`${host}`)
        .setDescription(`${response.motd.replace(/[^a-z0-9 §:!?.]/gi, "")}‎`)
        .addFields(
            { name: "Header", value: `${response.header.replace(/[^a-z0-9 §:!?.]/gi, "")}‎`, inline: true},
            { name: "Players Online", value: `${response.playersOnline}‎`, inline: true},
            { name: "Max Players", value: `${response.playersMax}‎`, inline: true},
            { name: "Gamemode", value: `${response.gamemode}‎`, inline: true},
            { name: "Server ID", value: `${response.serverId}‎`, inline: true},
            { name: "Protocol", value: `${response.protocol}‎`, inline: true}
        )
        .setFooter({
            text: `imagine playing ${host}`,
            iconURL: config.botAv
        })
        
    return channel.send({ embeds: [embed] })
}