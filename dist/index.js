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
exports.discordClient = void 0;
const config = require("../data/config.json");
const serverConnect_1 = require("./remoteUses/serverConnect");
const fs = require("fs");
const ping_1 = require("./remoteUses/ping");
const bruh = require("../data/users.json");
const messageTemplates_1 = require("./utils/messageTemplates");
const discord_js_1 = require("discord.js");
let host, port, version;
var isListening = false;
exports.discordClient = new discord_js_1.Client();
exports.discordClient.on("ready", () => {
    console.log(`logged in as ${exports.discordClient.user.username}`);
});
exports.discordClient.on('message', (message) => __awaiter(void 0, void 0, void 0, function* () {
    if (!message.content.startsWith(config.prefix))
        return;
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const msgStr = args.shift().toLowerCase();
    if (msgStr === "register") {
        fs.readFile('./utils/users.json', 'utf8', (err, data) => {
            if (err)
                throw new Error();
            const users = JSON.parse(data);
            if (args[0] === "manual" && message.member.hasPermission("ADMINISTRATOR")) {
                users.push({
                    gamertag: args[1],
                    name: args[2],
                    avatar: args[3],
                    colour: args[4]
                });
            }
            else {
                for (let i = 0; i < bruh.length; i++) {
                    console.log(users[i].name);
                    if (users[i].gamertag === message.member.nickname)
                        return message.channel.send("You have already been registered!");
                }
                users.push({
                    gamertag: `${message.member.nickname}`,
                    name: `${message.author.username}`,
                    avatar: message.author.avatarURL(),
                    colour: message.member.roles.color.hexColor
                });
            }
            fs.writeFileSync('./utils/users.json', JSON.stringify(users, null, 4));
            return message.channel.send("User registered!");
        });
    }
    if (msgStr === "listen") {
        if (args[0]) {
            host = args.shift();
            port = parseInt(args.shift());
            version = args.shift();
            (0, serverConnect_1.serverListen)(message.channel.id, exports.discordClient, host, port, version).catch(() => {
                return message.channel.send("An error has occured");
            });
            message.channel.send(`Started listening to ${host}:${port} on version ${version}`);
        } /* else if (!args[0] && config.DynamicListening) {
            let collector = new discord.MessageCollector(message.channel)
            collector.addListener('messageCreate', (msg) => {
                message.channel.send("please sen")
            })
        } */
        else {
            (0, serverConnect_1.serverListen)(message.channel.id, exports.discordClient, config.host, config.port, config.version);
            message.channel.send(`Started listening to ${config.host}:${config.port} on version ${config.version}`);
        }
        isListening = true;
    }
    if (msgStr === "ping") {
        return (0, ping_1.pingServer)(args[0], parseInt(args[1]), message);
    }
    if (msgStr === "serverinfo") {
        if (isListening) {
            return (0, messageTemplates_1.serverInfo)(message);
        }
        else {
            return message.channel.send("This command can only be ran if you are listening to a server");
        }
    }
    if (msgStr === "help") {
        return (0, messageTemplates_1.helpEmbed)(message);
    }
    if (msgStr === "listenhelp") {
        return (0, messageTemplates_1.serverHelp)(message);
    }
}));
exports.discordClient.login(config.token);
//# sourceMappingURL=index.js.map