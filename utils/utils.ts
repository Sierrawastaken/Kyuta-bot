import { deathTranslations, commandTranslations, potionTranslations, gamemodeTranslations } from './packetTranslations.js'

/**
 * Determines whether the message has an attachment 
 * @param message - a message
 * @returns true / false on whether the message has an attachment
 */
export function hasAttachment(message: any) {
    message = message.toJSON()                                             //more shit we cant do in v12
    return (message.attachments.length > 0 || message.embeds.length > 0 /*|| message.stickers.length > 0*/ ? true : false)
}

/**
 * Takes an entire packet and translates the varibles and placeholders for easier readability
 * @param packet - the entire packet to correct
 * @returns String with a corrected death message
 */
export function userCorrection(packet: any) {
    let result = deathTranslations[packet.message]

    if (packet.parameters.length > 1 && !packet.parameters[1].startsWith("%") && !packet.parameters[1].endsWith(".name")) {
        return result.replace("%1%", packet.parameters[1]).replace("%2%", packet.parameters[0])
    } else if (packet.parameters.length > 1 && packet.parameters[1].startsWith("%") && packet.parameters[1].endsWith(".name")) {
        return result.replace("%1%", packet.parameters[0]).replace("%2%", packet.parameters[1]).replace("%entity.", "").replace(".name", "").replace("_", " ").replace("_v2", "")
    } else {
        return result.replace("%1%", packet.parameters[0])
    }
}

/**
 * Takes a packet.message of a command response and parses it for readability
 * @param input - packet.message with raw command
 * @returns Array with [user who ran command, corrected command string]
 */
export function parseCommand(input: any) {
// {"rawtext":[{"text":"§7§o["},{"translate":"ttvsierra117"},{"text":": "},{"translate":"commands.summon.success","with":{"rawtext":null}},{"text":"]"}]}    
    if (input.rawtext[0].text === "§7§o[") {
        let json = [
            input.rawtext[1].translate,
            input.rawtext[2].text,
            input.rawtext[3].translate,
            input.rawtext[3].with.rawtext,
            input.rawtext[4].text
        ]

        let command = commandTranslations[json[2]]
        if (!json[3] || null) return [ json, command]
    
        for (let i = 0; i < 6; i++ ) {
            if (command.includes(`%${i}$s`)) {
                command = command.replace(`%${i}$s`, json[3][i-1].text)
            } if (command.includes(`%${i}$d`)) {
                command = command.replace(`%${i}$d`, json[3][i-1].text)
            }
        }

        if (json[3][0].text.startsWith("%potion")) {
            command = command.replace(json[3][0].text, potionTranslations[json[3][0].text.slice(1)])
        }

        if (json[3][0].text.startsWith("%createWorldScreen")) {
            command = command.replace(json[3][0].text, gamemodeTranslations[json[3][0].text.slice(1)])
        }

        return [ json, command]
    } else  {
        let command = input.rawtext[0].translate
        let json = [ "Unknown" ]
        command = command.replace("§f","").replace("§r","").replace("§7","").replace("§l","").replace("\\n","").replace("§a","").replace("§c","").replace("§b","")

        return [ json , command.slice(1)]
    }
}