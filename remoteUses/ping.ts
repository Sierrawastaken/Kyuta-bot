import { ping } from 'bedrock-protocol'
import { Message, MessageEmbed } from 'discord.js'
const config = require("../../data/config.json")

/**
 * Pings a server to get useful information
 * @param host - the host of the server you wish to ping
 * @param port - the port of the server you wish to ping
 * @param message - the message that triggered the command (used to send the embed to the right channel)
 * @returns MessageEmbed with useful information of the pinged server 
 */
export async function pingServer (host: string, port: number, message: Message) {
    
    let response = await ping({ 
        host: host, 
        port: port
    })

    let pingEmbed = new MessageEmbed() 
        .setColor("#52c8db")
        .setTitle(`${host}`)
        .setDescription(`${response.motd.replace(/[^a-z0-9 §:!?.]/gi, "")}‎`)
        .addFields(
                                            //@ts-ignore
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
        
    return message.channel.send(pingEmbed)
}