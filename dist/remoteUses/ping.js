"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pingServer = void 0;
const bedrock_protocol_1 = require("bedrock-protocol");
const discord_js_1 = require("discord.js");
const config = require("../../data/config.json");
/**
 * Pings a server to get useful information
 * @param host - the host of the server you wish to ping
 * @param port - the port of the server you wish to ping
 * @param message - the message that triggered the command (used to send the embed to the right channel)
 * @returns MessageEmbed with useful information of the pinged server
 */
function pingServer(host, port, message) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield (0, bedrock_protocol_1.ping)({
            host: host,
            port: port
        });
        let pingEmbed = new discord_js_1.MessageEmbed()
            .setColor("#52c8db")
            .setTitle(`${host}`)
            .setDescription(`${response.motd.replace(/[^a-z0-9 §:!?.]/gi, "")}‎`)
            .addFields(
        //@ts-ignore
        { name: "Header", value: `${response.header.replace(/[^a-z0-9 §:!?.]/gi, "")}‎`, inline: true }, { name: "Players Online", value: `${response.playersOnline}‎`, inline: true }, { name: "Max Players", value: `${response.playersMax}‎`, inline: true }, { name: "Gamemode", value: `${response.gamemode}‎`, inline: true }, { name: "Server ID", value: `${response.serverId}‎`, inline: true }, { name: "Protocol", value: `${response.protocol}‎`, inline: true })
            .setFooter({
            text: `imagine playing ${host}`,
            iconURL: config.botAv
        });
        return message.channel.send(pingEmbed);
    });
}
exports.pingServer = pingServer;
//# sourceMappingURL=ping.js.map