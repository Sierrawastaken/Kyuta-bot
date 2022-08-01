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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverListen = void 0;
const bedrock = require("bedrock-protocol");
const config = require("../../data/config.json");
const messageTemplates_1 = require("../utils/messageTemplates");
const utils_1 = require("../utils/utils");
const fs_1 = __importDefault(require("fs"));
const formating = require("../../data/formating.json");
//change this if you want no randomized endings
const random = Math.floor(Math.random() * 101);
let bridgedMessage;
/**
 * Initiates a client to connect to a server bridge the messages between discord/minecraft
 * @param channelId - message.channel.id of the channel you wish to start listening to
 * @param discordClient - the discord client object
 * @param host - the host you wish to connect to
 * @param port - the port of the host you wish to connect to
 * @param version - the version of the server you wish to connect to
 */
function serverListen(channelId, discordClient, host, port, version) {
    return __awaiter(this, void 0, void 0, function* () {
        const bedrockClient = bedrock.createClient({
            host: host,
            port: port,
            version: version,
            username: `Kyuta${random}`,
            offline: true
        });
        bedrockClient.on('packet', (packet) => __awaiter(this, void 0, void 0, function* () {
            if (packet.name != 'start_game')
                return;
            let json = JSON.stringify(packet.data, (key, value) => typeof value === "bigint" ? value.toString() + "n" : value, 4);
            fs_1.default.unlink('../../data/serverDat.json', function (err) {
                if (err)
                    throw new Error;
            });
            fs_1.default.appendFile('../../data/serverDat.json', json, (err) => {
                if (err)
                    throw new Error;
            });
            return;
        }));
        /*
        //SCOREBOARDS
    
        //get unique user entity ID
        bedrockClient.on('add_player', async (packet) => {
            
            let json = JSON.stringify(packet.username && packet.entity_id_self, (key, value) =>
                typeof value === "bigint" ? value.toString() + "n" : value
            , 4)
    
            await fs.appendFile('./usertempdata.json', json, (err) => {
                if (err) throw new Error
            })
        })
    
        //actually get the broken block
        bedrockClient.on('update_block', (updatePacket) => {
            // 134 is the runtime id that indicates its a broken block
            if (updatePacket.block_runtime_id != 134) return
    
            //checking for when an entity is spawned
            bedrockClient.once('add_item_entity', (itemPacket) => {
                let updateCoords = [updatePacket.position.x, updatePacket.position.y, updatePacket.position.z]
                let itemCoords = [itemPacket.position.x, itemPacket.position.y, itemPacket.position.z]
            })
        })
        */
        bedrockClient.on('text', (packet) => {
            if (packet.type === "chat" && packet.source_name != `Kyuta${random}`) {
                (0, messageTemplates_1.chatMessage)(packet.source_name, packet.message, "#52c8db");
            }
            if (packet.type === "translation") {
                if (!packet.message.startsWith("death")) {
                    if (packet.message.endsWith("joined")) {
                        (0, messageTemplates_1.connMessage)(packet.parameters, "joined", "#195905");
                    }
                    else {
                        (0, messageTemplates_1.connMessage)(packet.parameters, "left", "#c41e3a");
                    }
                }
                else {
                    (0, messageTemplates_1.deathMessage)(packet, "#002e63");
                }
            }
            if (packet.type === "json") {
                if (config.sendCommands)
                    (0, messageTemplates_1.commandOutput)(packet.message, "#bd4f0d");
                fs_1.default.appendFile('../../data/commandLog.txt', `${packet.message}`, (err) => {
                    if (err)
                        throw new Error;
                });
            }
        });
        discordClient.on("message", (message) => __awaiter(this, void 0, void 0, function* () {
            if (message.channel.id !== channelId)
                return;
            if (message.author.bot)
                return;
            if (message.content === `${config.prefix}break`) {
                bedrockClient.disconnect();
                message.channel.send("Stopped listening to the server!");
                console.log("Stopped listening to the server");
                return;
            }
            //keep commands above ^^^^
            if (message.content.startsWith(config.prefix))
                return;
            if (message.content.startsWith(config.runRawPrefix)) {
                let command = message.content.slice(config.runRawPrefix.length).trim();
                if (command.startsWith("/"))
                    command = command.slice(1);
                bedrockClient.queue('command_request', {
                    command: `/${command}`,
                    origin: {
                        size: 0,
                        type: 0,
                        uuid: "",
                        request_id: "",
                        player_entity_id: "",
                    },
                    interval: false,
                });
                return; //message.channel.send("Command ran successfully ")
            }
            for (let i = 0; i < formating.length; i++) {
                if (message.content.startsWith(formating[i].discord)) {
                    bridgedMessage = message.content.slice(formating[i].discord.length, -formating[i].discord.length);
                    bridgedMessage = formating[i].minecraft + bridgedMessage + "§r";
                    break;
                }
                else {
                    bridgedMessage = message.content;
                }
            }
            if (bridgedMessage === "" && (0, utils_1.hasAttachment)(message)) {
                bridgedMessage = "[Image]";
            }
            else if (bridgedMessage != "" && (0, utils_1.hasAttachment)(message)) {
                bridgedMessage + " (and an image)";
            }
            /*if (!message.reference) {*/
            bedrockClient.queue('command_request', {
                command: `/tellraw @a {"rawtext":[{"text":"§r§4[Discord]§f ${message.author.username}: ${bridgedMessage}"}]}`,
                origin: {
                    size: 0,
                    type: 0,
                    uuid: "",
                    request_id: "",
                    player_entity_id: "",
                },
                interval: false,
            });
            /*} else {
    
                so yeah ig "fetchReference()" just isnt a thing in v12? so ig we arent do this
    
                let repliedMessage = await message.fetchReference()
                let replie = repliedMessage.author.username
    
                bedrockClient.queue('command_request', {
                    command: `/tellraw @a {"rawtext":[{"text":"§r§4[Discord]§f ${message.author.username} replying to ${replie}: ${bridgedMessage}"}]}`,
                    origin: {
                        size: 0,
                        type: 0,
                        uuid: "",
                        request_id: "",
                        player_entity_id: "",
                    },
                    interval: false,
                })
            }*/
        }));
    });
}
exports.serverListen = serverListen;
//# sourceMappingURL=serverConnect.js.map