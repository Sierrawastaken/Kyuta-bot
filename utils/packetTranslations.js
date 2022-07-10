export const deathPackets =  {
    'death.attack.anvil': `%1% was squashed by a falling anvil`,
    'death.attack.arrow': `%1% was shot by %2%`,
    'death.attack.bullet': `%1% was sniped by %2%`,
    'death.attack.cactus': `%1% was pricked to death`,
    'death.attack.drown': `%1% drowned`,
    'death.attack.explosion': `%1% blew up`,
    'death.attack.explosion.player': `%1% was blown up by %2%`,
    'death.attack.fall': `%1% hit the ground too hard`,
    'death.attack.fallingBlock': `%1% was squashed by a falling block`,
    'death.attack.fireball': `%1% was fireballed by %2%`,
    'death.attack.fireworks': `%1% went off with a bang`,
    'death.attack.flyIntoWall': `%1% experienced kinetic energy`,
    'death.attack.generic': `%1% died`,
    'death.attack.indirectMagic': `%1% was killed by %2% using magic`,
    'death.attack.inFire': `%1% went up in flames`,
    'death.attack.inWall': `%1% suffocated in a wall`,
    'death.attack.lava': `%1% tried to swim in lava`,
    'death.attack.lightningBolt': `%1% was struck by lightning`,
    'death.attack.magic': `%1% was killed by magic`,
    'death.attack.magma': `%1% discovered floor was lava`,
    'death.attack.mob': `%1% was slain by %2%`,
    'death.attack.onFire': `%1% burned to death`,
    'death.attack.outOfWorld': `%1% fell out of the world`,
    'death.attack.player': `%1% was slain by %2%`,
    'death.attack.spit': `%1% was spitballed by %2%`,
    'death.attack.starve': `%1% starved to death`,
    'death.attack.thorns': `%1% was killed trying to hurt %2%`,
    'death.attack.trident': `%1% was impaled to death by %2%`,
    'death.attack.wither': `%1% withered away`,
    'death.attack.freeze': `%1% froze to death`,
    'death.attack.stalactite': `%1% was skewered by a falling stalactite`,
    'death.attack.stalagmite': `%1% was impaled on a stalagmite`,
    'death.fell.accident.generic': `%1% fell from a high place`,
}
/*
export const commandPackets =  {
    'commands.ability.description': `Sets a player's ability.`,
    'commands.ability.noability': `No ability called '%1$s' is available`,
    'commands.ability.granted': `The '%1$s' ability has been granted to you`,
    'commands.ability.revoked': `The '%1$s' ability has been revoked from you`,
    'commands.ability.success': `Ability has been updated`,
    'commands.achievement.alreadyHave': `Player %1$s already has achievement %2$s`,
    'commands.achievement.description': `Gives or removes an achievement from a player.`,
    'commands.achievement.dontHave': `Player %1$s doesn't have achievement %2$s`,
    'commands.achievement.give.success.all': `Successfully given all achievements to %1$s`,
    'commands.achievement.give.success.one': `Successfully given %1$s the stat %2$s`,
    'commands.achievement.statTooLow': `Player %1$s does not have the stat %2$s`,
    'commands.achievement.take.success.all': `Successfully taken all achievements from %1$s`,
    'commands.achievement.take.success.one': `Successfully taken the stat %1$s from %2$s`,
    'commands.achievement.unknownAchievement': `Unknown achievement or statistic %1$s`,
    'commands.agent.attack.success': `Agent attack successful`,
    'commands.agent.attack.failed': `Agent failed to attack`,
    'commands.agent.collect.success': `Agent collect successful`,
    'commands.agent.collect.failed': `Agent failed to collect`,
    'commands.agent.createagent.success': `Created Agent`,
    'commands.agent.createagent.failed': `Unable to create Agent`,
    'commands.agent.destroy.success': `Agent destroyed a block`,
    'commands.agent.destroy.failed': `Agent destroy failed`,
    'commands.agent.detect.success': `Agent detect successful`,
    'commands.agent.detect.failed': `Agent failed to detect`,
    'commands.agent.detectredstone.success': `Agent detectredstone successful`,
    'commands.agent.detectredstone.failed': `Agent failed to detectredstone`,
    'commands.agent.drop.success': `Agent drop successful`,
    'commands.agent.drop.failed': `Agent failed to drop`,
    'commands.agent.dropall.success': `Agent dropall successful`,
    'commands.agent.dropall.failed': `Agent failed to dropall`,
    'commands.agent.getitemcount.success': `Agent getitemcount successful`,
    'commands.agent.getitemcount.failed': `Agent failed to getitemcount`,
    'commands.agent.getitemspace.success': `Agent getitemspace successful`,
    'commands.agent.getitemspace.failed': `Agent failed to getitemspace`,
    'commands.agent.getitemdetail.success': `Agent getitemdetail successful`,
    'commands.agent.getitemdetail.failed': `Agent failed to getitemdetail`,
    'commands.agent.getposition.success': `Agent getposition successful`,
    'commands.agent.getposition.failed': `Agent getposition failed`,
    'commands.agent.inspect.success': `Agent inspect successful`,
    'commands.agent.inspect.failed': `Agent failed to inspect`,
    'commands.agent.inspectdata.success': `Agent inspect data successful`,
    'commands.agent.inspectdata.failed': `Agent failed to inspect data`,
    'commands.agent.move.success': `Agent move successful`,
    'commands.agent.move.failed': `Unable to move Agent`,
    'commands.agent.outofrange': `Cannot issue command, Agent is out of range`,
    'commands.agent.place.success': `Agent place successful`,
    'commands.agent.place.failed': `Agent failed to place`,
    'commands.agent.setitem.success': `Agent set item successful`,
    'commands.agent.setitem.failed': `Agent failed to set item`,
    'commands.agent.turn.success': `Agent turn successful`,
    'commands.agent.turn.failed': `Unable to turn Agent`,
    'commands.agent.till.success': `Agent till successful`,
    'commands.agent.till.failed': `Agent failed to till`,
    'commands.agent.tpagent.description': `Teleport your Agent.`,
    'commands.agent.tpagent.success': `Agent teleported`,
    'commands.agent.tpagent.failed': `Agent failed to teleport`,
    'commands.agent.transfer.success': `Agent transfer successful`,
    'commands.agent.transfer.failed': `Agent failed to transfer`,
    'commands.always.day': `Day-Night cycle %1$s`,
    'commands.always.day.locked': `Day-Night cycle locked`,
    'commands.always.day.unlocked': `Day-Night cycle unlocked`,
    'commands.ban.description': `Adds player to banlist.`,
    'commands.autocomplete.a': `all players`,
    'commands.autocomplete.c': `my Agent`,
    'commands.autocomplete.e': `all entities`,
    'commands.autocomplete.p': `closest player`,
    'commands.autocomplete.r': `random player`,
    'commands.autocomplete.s': `yourself`,
    'commands.autocomplete.v': `all Agents`,
    'commands.ban.failed': `Could not ban player %1$s`,
    'commands.ban.success': `Banned player %1$s`,
    'commands.banip.description': `Adds IP address to banlist.`,
    'commands.banip.invalid': `You have entered an invalid IP address or a player that is not online`,
    'commands.banip.success': `Banned IP address %1$s`,
    'commands.banip.success.players': `Banned IP address %1$s belonging to %2$s`,
    'commands.banlist.ips': `There are %1$d total banned IP addresses`,
    'commands.banlist.players': `There are %1$d total banned players`,
    'commands.blockdata.description': `Modifies the data tag of a block.`,
    'commands.blockdata.placeFailed': `You cannot place blocks here`,
    'commands.blockdata.destroyFailed': `You cannot dig here`,
    'commands.blockdata.failed': `The data tag did not change: %1$s`,
    'commands.blockdata.notValid': `The target block is not a data holder block`,
    'commands.blockdata.outOfWorld': `Cannot change block outside of the world`,
    'commands.blockdata.success': `Block data updated to: %1$s`,
    'commands.blockdata.tagError': `Data tag parsing failed: %1$s`,
    'commands.blockstate.invalidState': `'%1$s' is not a valid Block State.`,
    'commands.blockstate.stateError': `Block State: %1$s is invalid on Block: %2$s.`,
    'commands.blockstate.typeError': `Invalid value type for Block State: %1$s.`,
    'commands.blockstate.valueError': `Invalid value for Block State: %1$s.`,
    'commands.bossbar.add.success': `Created custom bossbar [%1$s]`,
    'commands.bossbar.add.failure.invalid': `Invalid bossbar ID. IDs should be of the form namespace:id or id (defaults to minecraft namespace).`,
    'commands.bossbar.add.failure.exists': `A bossbar already exists with the ID %1$s`,
    'commands.bossbar.description': `Creates and modifies boss bars`,
    'commands.bossbar.get.max': `Custom bossbar [%1$s] has a maximum of %2$d`,
    'commands.bossbar.get.players': `Custom bossbar [%1$s] has %2$s players currently online': %3$s`,
    'commands.bossbar.get.players.none': `Custom bossbar [%1$s] has no players currently online`,
    'commands.bossbar.get.players.one': `Custom bossbar [%1$s] has 1 player currently online: %2$s`,
    'commands.bossbar.get.value': `Custom bossbar [%1$s] has a value of %2$d`,
    'commands.bossbar.get.visible.true': `Custom bossbar [%1$s] is currently shown`,
    'commands.bossbar.get.visible.false': `Custom bossbar [%1$s] is currently hidden`,
    'commands.bossbar.list': `There are %1$s custom bossbars active: %2$s`,
    'commands.bossbar.list.none': `There are no custom bossbars active`,
    'commands.bossbar.list.one': `There is 1 custom bossbar active: %1$s`,
    'commands.bossbar.notFound': `No bossbar exists with the ID %1$s`,
    'commands.bossbar.remove': `Removed custom bossbar [%1$s]`,
    'commands.change-setting.description': `Changes a setting on the dedicated server while it's running.`,
    'commands.change-setting.success': `%1$s has been changed`,
    'commands.chunkinfo.compiled': `Chunk is compiled.`,
    'commands.chunkinfo.data': `First 64 vertices are': %1$s`,
    'commands.chunkinfo.empty': `Chunk is empty.`,
    'commands.chunkinfo.hasLayers': `Chunk has layers: %1$s`,
    'commands.chunkinfo.hasNoRenderableLayers': `Chunk has no renderable layers.`,
    'commands.chunkinfo.isEmpty': `Chunk has empty layers: %1$s`,
    'commands.chunkinfo.location': `Chunk location': (%1$d, %2$d, %3$d)`,
    'commands.chunkinfo.noChunk': `No chunk found at chunk position %1$d, %2$d, %3$d`,
    'commands.chunkinfo.notCompiled': `Chunk is not compiled.`,
    'commands.chunkinfo.notEmpty': `Chunk is not empty.`,
    'commands.chunkinfo.vertices': `%1$s layer's buffer contains %2$d vertices`,
    'commands.classroommode.description': `Attempt to launch and connect to Classroom Mode.`,
    'commands.classroommode.success': `Attempting to launch Classroom Mode...`,
    'commands.clear.description': `Clears items from player inventory.`,
    'commands.clear.failure': `Could not clear the inventory of %1$s`,
    'commands.clear.failure.no.items': `Could not clear the inventory of %1$s, no items to remove`,
    'commands.clear.success': `Cleared the inventory of %1$s, removing %2$d items`,
    'commands.clear.tagError': `Data tag parsing failed: %1$s`,
    'commands.clear.testing': `%1$s has %2$d items that match the criteria`,
    'commands.clearfixedinv.description': `Removes all Fixed Inventory Slots.`,
    'commands.clearfixedinv.success': `Cleared the Fixed Inventory`,
    'commands.clone.description': `Clones blocks from one region to another.`,
    'commands.clone.failed': `No blocks cloned`,
    'commands.clone.filtered.error': `Filtered usage requires a filter block to be specified`,
    'commands.clone.noOverlap': `Source and destination can not overlap`,
    'commands.clone.success': `%1$d blocks cloned`,
    'commands.clone.tooManyBlocks': `Too many blocks in the specified area (%1$d > %2$d)`,
    'commands.closechat.description': `Closes the chat window of the local player if it is open.`,
    'commands.closechat.success': `Chat closed`,
    'commands.closechat.failure': `Chat was not open`,
    'commands.closewebsocket.description': `Closes websocket connection if there is one.`,
    'commands.code.description': `Launches Code Builder.`,
    'commands.code.success': `Launched Code Builder.`,
    'commands.compare.failed': `Source and destination are not identical`,
    'commands.compare.success': `%1$d blocks compared`,
    'commands.compare.tooManyBlocks': `Too many blocks in the specified area (%1$d > %2$d)`,
    'commands.compactdb.description': `Explicitly compacts the levelDB log.`,
    'commands.compactdb.success': `Successfully compacted levelDB log.`,
    'commands.corruptworld.description': `Corrupts the world loaded on the server.`,
    'commands.corruptworld.success': `Successfully corrupted the world.`,
    'commands.damage.description': `Apply damage to the specified entities.`,
    'commands.damage.specify.damage': `Please specify a valid damage value.`,
    'commands.damage.success': `Applied damage to %1$s`,
    'commands.damage.failed': `Could not apply damage to %1$s`,
    'commands.damage.tooManySources': `There can only be one source entity. Please adjust your selector to limit selection to one entity.`,
    'commands.daylock.description': `Locks and unlocks the day-night cycle.`,
    'commands.debug.description': `Starts or stops a debugging session.`,
    'commands.debug.notStarted': `Can't stop profiling when we haven't started yet!`,
    'commands.debug.start': `Started debug profiling`,
    'commands.debug.stop': `Stopped debug profiling after %.2f seconds (%1$d ticks)`,
    'commands.defaultgamemode.description': `Sets the default game mode.`,
    'commands.defaultgamemode.success': `The world's default game mode is now %1$s`,
    'commands.deop.description': `Revokes operator status from a player.`,
    'commands.deop.failed': `Could not de-op (permission level too high): %s`,
    'commands.deop.success': `De-opped': %s`,
    'commands.deop.message': `You have been de-opped`,
    'commands.dialogue.description': `Opens NPC dialogue for a player.`,
    'commands.dialogue.changeFailed': `Failed to change the scene for the NPC.`,
    'commands.dialogue.changeSuccess': `Dialogue successfully changed the scene for the NPC globally.`,
    'commands.dialogue.changePerPlayerSuccess': `Dialogue successfully changed NPC text just for %1$s.`,
    'commands.dialogue.invalidScene': `Invalid scene was referenced.`,
    'commands.dialogue.noNpcComponent': `Selected actor did not have an NPC component.`,
    'commands.dialogue.npcNotFound': `Failed to find an NPC.`,
    'commands.dialogue.npcNotInRange': `An NPC was found, but was not in the receiving player %1$s's ticking range.`,
    'commands.dialogue.success': `Dialogue sent to %1$s.`,
    'commands.dialogue.tooManyNPCs': `Selector for NPCs was ambiguous and resulted in too many selected. Please select only one NPC.`,
    'commands.difficulty.description': `Sets the difficulty level.`,
    'commands.difficulty.usage': `/difficulty <new difficulty>`,
    'commands.difficulty.success': `Set game difficulty to %1$s`,
    'commands.downfall.success': `Toggled downfall`,
    'commands.effect.description': `Add or remove status effects.`,
    'commands.effect.failure.notActive': `Couldn't take %1$s from %2$s as they do not have the effect`,
    'commands.effect.failure.notActive.all': `Couldn't take any effects from %1$s as they do not have any`,
    'commands.effect.failure.notAMob': `%1$s cannot have effects`,
    'commands.effect.notFound': `There is no such mob effect with ID %s`,
    'commands.effect.success': `Gave %1$s * %2$d to %3$s for %4$d seconds`,
    'commands.effect.success.removed': `Took %1$s from %2$s`,
    'commands.effect.success.removed.all': `Took all effects from %1$s`,
    'commands.enchant.cantCombine': `%1$s can't be combined with %2$s`,
    'commands.enchant.invalidLevel': `%1$s does not support level %2$d`,
    'commands.enchant.cantEnchant': `The selected enchantment can't be added to the target item: %1$s`,
    'commands.enchant.description': `Adds an enchantment to a player's selected item.`,
    'commands.enchant.noItem': `The target doesn't hold an item: %1$s`,
    'commands.enchant.notFound': `There is no such enchantment with ID %1$d`,
    'commands.enchant.success': `Enchanting succeeded for %1$s`,
    'commands.entitydata.description': `Modifies the data tag of an entity.`,
    'commands.entitydata.failed': `The data tag did not change: %1$s`,
    'commands.entitydata.noPlayers': `%1$s is a player and cannot be changed`,
    'commands.entitydata.success': `Entity data updated to: %1$s`,
    'commands.entitydata.tagError': `Data tag parsing failed: %1$s`,
    'commands.event.description': `Triggers an event for the specified object(s)`,
    'commands.event.error.empty': `Event name cannot be empty`,
    'commands.event.error.failed': `%1$s could not be executed on: %2$s`,					// 1': `Event Name ##2': `List of failed entities for which the event could not be executed
    'commands.event.success': `%1$s successfully executed on: %2$s`,						    // ': `Event Name ##2': `List of entities
    'commands.execute.allInvocationsFailed': `All invocations failed: %1$s`,
    'commands.execute.failed': `Failed to execute %1$s as %2$s`,
    'commands.execute.description': `Executes a command on behalf of one or more entities`,
    'commands.execute.outRangedDetectPosition': `Detect position: %1$s %2$s %3$s is out of range.`,
    'commands.execute.falseCondition': `Execute subcommand %1$s %2$s resolved FALSE.`,	//1': `Subcommand ##2': `ConditionSubcommand
    'commands.execute.ifUnlessBlocks.tooManyBlocks': `Checking too many blocks. Max block count': %1$s. Current block count: %2$s.`,	//1': `Max number of blocks that are checked ##2': `Current number of blocks that are checked
    'commands.execute.ifUnlessScore.score.notFound': `No %1$s score for %2$s found`,	//1': `Objective Name ##2': `Player Name
    'commands.execute.ifUnlessScore.targets.tooMany': `%1$s targets matched the selector. Only 1 target is allowed.`,	// Number of targets that are matching with selector
    'commands.execute.ifUnlessScore.targets.empty': `There is no tracked player %1$s on the scoreboard`,	//1': `Player name
    'commands.execute.ifUnlessScore.objectiveNotFound': `No objective was found by the name %1$s`,	//1': `Objective Name
    'commands.execute.ifUnlessScore.players.compareOperation.invalidOperation': `Invalid operation %1$s.`,	//1': `Operator
    'commands.fill.description': `Fills all or parts of a region with a specific block.`,
    'commands.fill.failed': `No blocks filled`,
    'commands.fill.outOfWorld': `Cannot place blocks outside of the world`,
    'commands.fill.success': `%1$d blocks filled`,
    'commands.fill.tagError': `Data tag parsing failed: %1$s`,
    'commands.fill.tooManyBlocks': `Too many blocks in the specified area (%1$d > %2$d)`,
    'commands.fill.replace.auxvalue.invalid': `Invalid replace data value for block %1$s`,
    'commands.fog.description': `Add or remove fog settings file`,
    'commands.fog.invalidFogId': `Invalid Fog Setting Id : %1$s`,
    'commands.fog.invalidUserId': `No fog settings with the id were found for %1$s`,
    'commands.fog.limitReached': `Size limit reached for fog identifiers for %1$s`,
    'commands.fog.success.pop': `Last pushed fog setting with id %2$s was successfully removed from %1$s`,
    'commands.fog.success.push': `Fog setting was successfully added for %1$s with id %2$s`,
    'commands.fog.success.remove': `Fog settings with id %2$s were successfully removed from %1$s`,
    'commands.function.description': `Runs commands found in the corresponding function file.`,
    'commands.function.functionNameNotFound': `Function %1$s not found.`,
    'commands.function.invalidCharacters': `Function with title '%s' is invalid, character '%s' is not allowed in function names.`,
    'commands.function.noEngineVersionSpecified': `Function %s could not be run. You must specify a min_engine_version in the behavior pack's manifest.json.`,
    'commands.function.success': `Successfully executed %1$d function entries.`,
    'commands.gamemode.description': `Sets a player's game mode.`,
    'commands.gamemode.success.other': `Set %2$s's game mode to %1$s`,
    'commands.gamemode.success.self': `Set own game mode to %1$s`,
    'commands.gamemode.fail.invalid': `Game mode %1$s is invalid`,
    'commands.gamerule.description': `Sets or queries a game rule value.`,
    'commands.gamerule.type.invalid': `Invalid type used for game rule %1$s`,
    'commands.gamerule.type.nocheatsenabled': `Game rule %1$s can only be used if cheats are enabled in this world.`,
    'commands.gamerule.nopermission': `Only server owners can change %1$s`,
    'commands.gamerule.norule': `No game rule called %1$s is available`,
    'commands.gamerule.success': `Game rule %1$s has been updated to %2$s`,
    'commands.generic.async.initiated': `%1$s command started (async step %2$d)`,
    'commands.generic.boolean.invalid': `%1$s is not true or false`,
    'commands.generic.chunk.notFound': `Specified chunk not found`,
    'commands.generic.componentError': `Component list parsing failed`,
    'commands.generic.dimension.notFound': `Specified dimension not found`,
    'commands.generic.disabled': `Cheats aren't enabled in this world.`,
    'commands.generic.disabled.templateLocked': `Settings are currently locked. Unlock Template World Options in the Game Settings menu to change them.`,
    'commands.generic.double.tooBig': `The number you have entered (%.2f) is too big, it must be at most %.2f`,
    'commands.generic.double.tooSmall': `The number you have entered (%.2f) is too small, it must be at least %.2f`,
    'commands.generic.duplicateType': `Duplicate type arguments`,
    'commands.generic.duplicateSelectorArgument': `Duplicate %s selector arguments`,
    'commands.generic.encryption.badkey': `Bad public key given. Expected 120 byte key after PEM formatting.`,
    'commands.generic.encryption.badsalt': `Bad salt given. Expected a 16 bytes before base 64 encoding.`,
    'commands.generic.encryption.required': `Encrypted session required`,
    'commands.generic.entity.invalidType': `Entity type '%1$s' is invalid`,
    'commands.generic.entity.invalidUuid': `The entity UUID provided is in an invalid format`,
    'commands.generic.entity.notFound': `That entity cannot be found`,
    'commands.generic.exception': `An unknown error occurred while attempting to perform this command`,
    'commands.generic.invalidAgentType': `Type argument applied to Agent-only selector`,
    'commands.generic.invalidcontext': `Invalid context provided for given command type`,
    'commands.generic.invalidDevice': `The command you entered, %s, is not supported on this device`,
    'commands.generic.invalidPlayerType': `Type argument applied to player-only selector`,
    'commands.generic.invalidType': `Unknown type argument`,
    'commands.generic.levelError': `Max level has to be larger than min level`,
    'commands.generic.malformed.body': `Body is missing or malformed`,
    'commands.generic.malformed.type': `Invalid request type`,
    'commands.generic.notimplemented': `Not implemented`,
    'commands.generic.num.invalid': `'%1$s' is not a valid number`,
    'commands.generic.num.tooBig': `The number you have entered (%1$d) is too big, it must be at most %2$d`,
    'commands.generic.num.tooSmall': `The number you have entered (%1$d) is too small, it must be at least %2$d`,
    'commands.generic.outOfWorld': `Cannot access blocks outside of the world`,
    'commands.generic.parameter.invalid': `'%1$s' is not a valid parameter`,
    'commands.generic.permission.selector': `<insufficient permissions for selector expansion>`,
    'commands.generic.player.notFound': `That player cannot be found`,
    'commands.generic.protocol.mismatch': `Provided protocol version doesn't match Minecraft's protocol version`,
    'commands.generic.radiusError': `Minimum selector radius must be smaller than maximum`,
    'commands.generic.radiusNegative': `Radius cannot be negative`,
    'commands.generic.rotationError': `Rotation out of range`,
    'commands.generic.running': `The command is already running`,
    'commands.generic.step.failed': `Command step failed`,
    'commands.generic.syntax': `Syntax error: Unexpected %2$s: at %1$s>>%2$s<<%3$s`,
    'commands.generic.noTargetMatch': `No targets matched selector`,
    'commands.generic.targetNotPlayer': `Selector must be player-type`,
    'commands.generic.tooManyNames': `Too many target name arguments`,
    'commands.generic.tooManyTargets': `Too many targets matched selector`,
    'commands.generic.too.many.requests': `Too many commands have been requested, wait for one to be done`,
    'commands.generic.unknown': `Unknown command: %s. Please check that the command exists and that you have permission to use it.`,
    'commands.generic.usage': `Usage: %1$s`,
    'commands.generic.usage.noparam': `Usage:`,
    'commands.generic.version.mismatch': `The requested version doesn't exist for this command`,
    'commands.generic.version.missing': `Command calls not from chat should specify the command's version`,
    'commands.getchunkdata.description': `Gets pixels for a specific chunk.`,
    'commands.getchunkdata.success': `Chunk data received`,
    'commands.getchunks.description': `Gets list of chunks that are loaded.`,
    'commands.getchunks.success': `Chunk list received`,
    'commands.getlocalplayername.description': `Returns the local player name.`,
    'commands.getspawnpoint.description': `Gets the spawn position of the specified player(s).`,
    'commands.gettopsolidblock.description': `Gets the position of the top non-air block below the specified position`,
    'commands.gettopsolidblock.notfound': `No solid blocks under specified position`,
    'commands.give.block.notFound': `There is no such block with name %1$d`,
    'commands.give.description': `Gives an item to a player.`,
    'commands.give.item.invalid': `Invalid command syntax: no such %s exists with that data value`,
    'commands.give.item.notFound': `There is no such item with name %1$d`,
    'commands.give.map.invalidData': `Invalid map data provided`,
    'commands.give.map.featureNotFound': `Could not make exploration map. Feature not found on this dimension`,
    'commands.give.success': `Gave %1$s * %2$d to %3$s`,
    'commands.give.successRecipient': `You have been given %1$s * %2$d`,
    'commands.give.tagError': `Data tag parsing failed: %1$s`,
    'commands.hasitem.fail.invalidData': `"data" has an invalid input, must be an integer.`,
    'commands.hasitem.fail.invalidQuantity': `"quantity" has an invalid input, must be an integer or range of integers.`,
    'commands.hasitem.fail.invalidSlot': `"slot" has an invalid input, must be an integer or range of integers.`,
    'commands.hasitem.fail.noItem': `"item" missing, required for "hasitem" filter.`,
    'commands.hasitem.fail.slotNoLocation': `Specifying a "slot" is invalid if a "location" is not given.`,
    'commands.help.description': `Provides help/list of commands.`,
    'commands.help.footer': `Tip': Use the <tab> key while typing a command to auto-complete the command or its arguments`,
    'commands.help.header': `--- Showing help page %1$d of %2$d (/help <page>) ---`,
    'commands.help.command.aliases': `%s (also %s)':`,
    'commands.immutableworld.description': `Sets the immutable state of the world.`,
    'commands.immutableworld.info': `immutableworld ': %s`,
    'commands.kick.description': `Kicks a player from the server.`,
    'commands.kick.description.edu': `Removes a player from the game.`,
    'commands.kick.no.player': `Please provide the name of the player you want to kick`,
    'commands.kick.not.found': `Could not find player %1$s`,
    'commands.kick.not.yourself': `You may not remove yourself from the game`,
    'commands.kick.success': `Kicked %1$s from the game`,
    'commands.kick.success.reasonedu': `Removed %1$s from the game: %2$s`,
    'commands.kick.no.host': `The host may not be kicked from the game.`,
    'commands.kick.no.teacher': `Teachers may not be removed from the game.`,
    'commands.kill.successful.edu': `Removed %1$s`,
    'commands.kill.successful': `Killed %1$s`,
    'commands.kill.description.edu': `Removes entities (players, mobs, etc.).`,
    'commands.kill.description': `Kills entities (players, mobs, etc.).`,
    'commands.lesson.description': `Handle Educational Lesson reporting.`,
    'commands.lesson.success': `Success`,
    'commands.list.description': `Lists players on the server.`,
    'commands.locate.description': `Displays the coordinates for the closest structure of a given type.`,
    'commands.locate.fail.noplayer': `The command can only be used by a valid player`,
    'commands.locate.fail.nostructurefound': `No valid structure found within a reasonable distance`,
    'commands.locate.success': `The nearest %1$s is at block %2$s, (y?), %3$s`,
    'commands.locatebiome.description': `Locates specified biome.`,
    'commands.locatebiome.fail': `Could not find a biome of type %1$s within a reasonable distance`,
    'commands.locatebiome.success': `The nearest %1$s is at block %2$s, %3$s, %4$s (%5 blocks away)`,
    'commands.loot.description': `Drops the given loot table into the specified inventory or into the world.`,
    'commands.loot.failure.invalidLootTable': `Loot table '%1$s' not found`,
    'commands.loot.failure.mainhandOffhandOnNonEntity': `Mainhand or offhand should not be used on non entity object.`,
    'commands.loot.failure.entityNoLootTable': `Entity %1$s has no loot table`,
    'commands.loot.failure.noContainer': `Target position %s is not a container`,
    'commands.loot.failure.invalidSlotIdForSlotType': `Could not replace slot %s, slot must be between %d and %d for %s`,
    'commands.loot.failure.invalidSlotTypeForEntity': `Entity %s does not have SlotType %s`,
    'commands.loot.failure.countExceedsContainerSize': `slotId + count exceeds slot container size %d`,
    'commands.loot.failure.negativeCount': `count cannot be negative a negative number`,
    'commands.loot.success': `%1$s items were dropped.`,
    'commands.loot.replaceSuccess': `Replaced %s %d of %s with %d item(s) over %d slot(s)`,
    'commands.togglecontentlog.toggle': `Enables/Disables the content log command`,
    'commands.togglecontentlog.enabled': `Content Log Enabled`,
    'commands.togglecontentlog.disabled': `Content Log Disabled`,
    'commands.me.description': `Displays a message about yourself.`,
    'commands.message.display.incoming': `%1$s whispers to you: %2$s`,
    'commands.message.display.outgoing': `You whisper to %1$s: %2$s`,
    'commands.message.sameTarget': `You can't send a private message to yourself!`,
    'commands.mobevent.description': `Controls what mob events are allowed to run.`,
    'commands.mobevent.eventsEnabledSetToTrue': `Mob Events are now enabled. Individual events which are set to false will not run.`,
    'commands.mobevent.eventsEnabledSetToFalse': `Mob Events are now disabled. Individual events will not run.`,
    'commands.mobevent.eventsEnabledIsTrue': `Mob Events are enabled. Individual events which are set to false will not run.`,
    'commands.mobevent.eventsEnabledIsFalse': `Mob Events are disabled. Individual events will not run.`,

    //for the following new loc strings, the first parameter is a localized event name, and the second is the literal event that must be entered into the command.
    
    'commands.mobevent.eventSetToTrue': `Mob Event %s (id': `%s) set to true.
    'commands.mobevent.eventSetToTrueButEventsDisabled': `Mob Event %s (id': `%s) set to true, but Mob Events are disabled.
    'commands.mobevent.eventSetToFalse': `Mob Event %s (id': `%s) set to false.
    'commands.mobevent.eventIsTrue': `Mob Event %s (id': `%s) is set to true.
    'commands.mobevent.eventIsTrueButEventsDisabled': `Mob Event %s (id': `%s) is set to true, but Mob Events are disabled.
    'commands.mobevent.eventIsFalse': `Mob Event %s (id': `%s) is set to false.

    'commands.music.description': `Allows you to control playing music tracks.
    'commands.music.failure.emptyTrackName': `You must provide a non-empty track name.
    'commands.music.success.queueAction': `%s has been queued and it will start playing when the current track stops.
    'commands.music.success.playAction': `%s has been queued to start playing.
    'commands.music.success.stopAction': `Custom music will stop now.
    'commands.music.success.volumeAction': `Music volume will be updated to %d.
    'commands.op.description': `Grants operator status to a player.
    'commands.op.failed': `Could not op (already op or higher)': `%s
    'commands.op.success': `Opped': `%s
    'commands.op.message': `You have been opped
    'commands.operator.invalid': `Invalid operation %1$s.
    'commands.origin.commandblock': `CommandBlock
    'commands.origin.external': `External
    'commands.origin.devconsole': `DevConsole
    'commands.origin.script': `Script Engine
    'commands.origin.server': `Server
    'commands.origin.teacher': `Teacher
    'commands.ops.description': `Reloads and applies Op permissions.
    'commands.ops.reloaded': `Ops reloaded from file.
    'commands.ops.set.success': `Succeeded in setting operator level for player %s.
    'commands.permissions.description': `Reloads and applies permissions.
    'command.permissions.list.fail.filenotfound': `Failed to list permissions from file, file not found.
    'commands.permissions.reloaded': `Permissions reloaded from file.
    'command.permissions.reload.fail.filenotfound': `Failed to reload permissions from file, file not found.
    'commands.permissions.set.failed': `Could not set permission level %s for player %s.
    'commands.permissions.set.success': `Succeeded in setting permission level %s for player %s.
    'commands.permissions.save.failed': `Could not save permission level %s for player %s.
    'commands.permissions.save.success': `Succeeded in saving permission level %s for player %s.
    'commands.spawnParticleEmitter.description': `Creates a particle emitter
    'commands.spawnParticleEmitter.success': `Request to create %1$s sent to all players.
    'commands.particle.description': `Creates particles.
    'commands.particle.notFound': `Unknown effect name (%1$s)
    'commands.particle.success': `Playing effect %1$s for %2$d times
    'commands.playanimation.description': `Makes one or more entities play a one-off animation. Assumes all variables are setup correctly.
    'commands.playanimation.success': `Animation request sent to clients for processing.
    'commands.players.list': `There are %1$d/%2$d players online':
    'commands.players.list.names': `%s
    'commands.playsound.description': `Plays a sound.
    'commands.playsound.playerTooFar': `Player %1$s is too far away to hear the sound
    'commands.playsound.success': `Played sound '%1$s' to %2$s
    'commands.position.description': `Toggles on/off coordinates for player.
    'commands.publish.failed': `Unable to host local game
    'commands.publish.started': `Local game hosted on port %1$s
    'commands.querytarget.description': `Gets transform, name, and id information about the given target entity or entities.
    'commands.querytarget.success': `Target data': `%1$s
    'commands.reload.description': `Reloads all function and script files from all behavior packs.
    'commands.reload.success': `Function and script files have been reloaded.
    'commands.replaceitem.description': `Replaces items in inventories.
    'commands.replaceitem.failed': `Could not replace %s slot %d with %d * %s
    'commands.replaceitem.keepFailed': `There is already an item occupying %s slot %d.
    'commands.replaceitem.noContainer': `Block at %s is not a container
    'commands.replaceitem.badSlotNumber': `Could not replace slot %d, must be a value between %d and %d.
    'commands.replaceitem.success': `Replaced %s slot %d with %d * %s
    'commands.replaceitem.success.entity': `Replaced %s slot %d of %s with %d * %s
    'commands.replaceitem.tagError': `Data tag parsing failed': `%1$s
    'commands.ride.description': `Makes entities ride other entities, stops entities from riding, makes rides evict their riders, or summons rides or riders.
    'commands.ride.evictRiders.success': `Rides that have successfully evicted their riders': `%1$s
    'commands.ride.startRiding.failure': `Riders that did not meet ride conditions': `%1$s
    'commands.ride.startRiding.groupDoesntFit': `The group of riders does not fit on the ride.
    'commands.ride.startRiding.notRideable': `The selected entity is not rideable.
    'commands.ride.startRiding.rideFull': `This ride is already full.
    'commands.ride.startRiding.rideFullRidersLeft': `The ride is full, so some riders were not added.
    'commands.ride.startRiding.success': `Riders successfully added to ride': `%1$s
    'commands.ride.startRiding.tooManyRiders': `Too many riders were specified. Only one is allowed at a time for teleport_ride.
    'commands.ride.startRiding.tooManyRides': `Too many rides were specified. Only one is allowed at a time.
    'commands.ride.stopRiding.success': `Riders that have successfully stopped riding': `%1$s
    'commands.ride.summonRide.failed': `Rides were summoned, but these riders could not be added to them': `%1$s
    'commands.ride.summonRide.notRideable': `Entity was summoned, but it is not rideable.
    'commands.ride.summonRide.success': `Ride successfully summoned for these riders': `%1$s
    'commands.ride.summonRider.failed': `Riders were summoned, but could not be added to rides': `%1$s
    'commands.ride.summonRider.fullRides': `Riders could not ride these rides because they are full': `%1$s
    'commands.ride.summonRider.ridesWithNoRideableComp': `The following entities are not rideable': `%1$s
    'commands.ride.summonRider.success': `Riders successfully summoned for rides': `%1$s
    'commands.save.description': `Control or check how the game saves data to disk.
    'commands.save.disabled': `Turned off world auto-saving
    'commands.save.enabled': `Turned on world auto-saving
    'commands.save.failed': `Saving failed': `%1$s
    'commands.save.start': `Saving...
    'commands.save.success': `Saved the world
    'commands.save-all.error': `An error occurred when trying to pause the world storage.
    'commands.save-all.success': `Data saved. Files are now ready to be copied.
    'commands.save-off.alreadyOff': `Saving is already turned off.
    'commands.save-on.alreadyOn': `Saving is already turned on.
    'commands.save-on.notDone': `A previous save has not been completed.
    'commands.save-on.description': `Enables automatic server saves.
    'commands.save-on.success': `Changes to the world are resumed.
    'commands.save-state.description': `Checks if a previous save-all has finished and lists the files involved.
    'commands.say.description': `Sends a message in the chat to other players.
    'commands.schedule.delay.functionQueued': `Scheduled function %1$s in %2$d ticks at gametime %3$d.
    'commands.schedule.delay.negativeTime': `Time cannot be negative.
    'commands.schedule.description': `Schedules an action to be executed once an area is loaded, or after a certain amount of time.
    'commands.schedule.functionQueued': `Function has been queued and it will be executed when the specified area is fully loaded.
    'commands.schedule.functionRan': `Successfully executed %1$d function entries in function %2$s.
    'commands.schedule.invalidOrigin': `The origin needed to execute this function was invalid.`,
    'commands.schedule.name.empty': `Ticking area name cannot be empty`,
    'commands.schedule.too.many.areas': `More than one ticking areas were found with the name %s. Please use a single area.`,

    // Scoreboard is composed of several Objectives, which can be displayed to players in 3 different 'slots'	
    // An Objective holds the scores that each player has for the Objective. 									
    // Objectives can have different Criteria, which dictate how the scores are updated for this Objective		
    // Objectives have two names, one for internal use and the other for Displaying in the UI					

    // Going overboard on the context but Scoreboards do some weird stuff :D						

    'commands.scoreboard.description': `Tracks and displays scores for various objectives.						##
    'commands.scoreboard.allMatchesFailed': `All matches failed												##
    'commands.scoreboard.noMultiWildcard': `Only one user wildcard allowed									##
    'commands.scoreboard.objectiveNotFound': `No objective was found by the name '%1$s'						##1': `Objective Name
    'commands.scoreboard.objectiveReadOnly': `The objective '%1$s' is read-only and cannot be set			##1': `Objective Name
    'commands.scoreboard.objectives.add.alreadyExists': `An objective with the name '%1$s' already exists	##1': `Objective Name
    'commands.scoreboard.objectives.add.displayTooLong': `The display name '%1$s' is too long for an objective, it can be at most %2$d characters long	##1': `Objective Display Name ##2': `Name Length Limit
    'commands.scoreboard.objectives.add.success': `Added new objective '%1$s' successfully																##1': `Objective Name
    'commands.scoreboard.objectives.add.tooLong': `The name '%1$s' is too long for an objective, it can be at most %2$d characters long					##1': `Objective Name ##2': `Name Length Limit
    'commands.scoreboard.objectives.add.wrongType': `Invalid objective criteria type '%1$s'						##1': `Criteria Name
    'commands.scoreboard.objectives.add.needName': `An objective needs a name.									##
    'commands.scoreboard.objectives.description': `Modify scoreboard objectives.								##
    'commands.scoreboard.objectives.list.count': `Showing %1$d objective(s) on scoreboard':	`					##1': `Number of Objectives
    'commands.scoreboard.objectives.list.empty': `There are no objectives on the scoreboard						##
    'commands.scoreboard.objectives.list.entry': `- %1$s': `displays as '%2$s' and is type '%3$s'					##1': `Objective Name ##2': `Objective Display Name ##3': `Criteria Name
    'commands.scoreboard.objectives.remove.success': `Removed objective '%1$s' successfully						##1': `Objective Name
    'commands.scoreboard.objectives.setdisplay.invalidSlot': `No such display slot '%1$s'						##1': `Display Slot
    'commands.scoreboard.objectives.setdisplay.successCleared': `Cleared objective display slot '%1$s'			##1': `Display Slot
    'commands.scoreboard.objectives.setdisplay.successSet': `Set the display objective in slot '%1$s' to '%2$s'	##1': `Display Slot ##2': `Objective Name
    'commands.scoreboard.players.add.success': `Added %1$d to [%2$s] for %3$s (now %4$d)						##1': `Score Value ##2': `Objective Name ##3': `Player Name ##4': `New Score Value
    'commands.scoreboard.players.add.multiple.success': `Added %1$d to [%2$s] for %3$d entities					##1': `Score Value ##2': `Objective Name ##3': `Player Count
    'commands.scoreboard.players.nameNotFound': `A player name must be given.									##
    'commands.scoreboard.players.enable.noTrigger': `Objective %1$s is not a trigger							##1': `Objective Name
    'commands.scoreboard.players.enable.success': `Enabled trigger %1$s for %2$s								##1': `Trigger Name ##2': `Objective Name
    'commands.scoreboard.players.list.count': `Showing %1$d tracked players on the scoreboard':	`				##1': `Number of Players
    'commands.scoreboard.players.list.empty': `There are no tracked players on the scoreboard					##
    'commands.scoreboard.players.list.player.count': `Showing %1$d tracked objective(s) for %2$s':	`			##1': `Objective Count ##2': `Player Name
    'commands.scoreboard.players.list.player.empty': `Player %1$s has no scores recorded						##1': `Player Name
    'commands.scoreboard.players.list.player.entry': `- %2$s': `%1$d (%3$s)										##1': `Score Value ##2': `Objective Display Name ##3': `Objective Name
    'commands.scoreboard.players.operation.invalidOperation': `Invalid operation %1$s							##
    'commands.scoreboard.players.operation.notFound': `No %1$s score for %2$s found								##1': `Objective Name ##2': `Player Name
    'commands.scoreboard.players.operation.success': `Updated [%1$s] for %2$d entities							##1': `Objective Name ##2': `Player Count
    'commands.scoreboard.players.offlinePlayerName': `Player Offline
    'commands.scoreboard.players.random.invalidRange': `Min %1$d is not less than max %2$d						##1': `Min Range Value ##2': `Max Range Value
    'commands.scoreboard.players.remove.success': `Removed %1$d from [%2$s] for %3$s (now %4$d)					##1': `Score Value ##2': `Objective Name ##3': `Player Name ##4': `New Score Value
    'commands.scoreboard.players.remove.multiple.success': `Removed %1$d from [%2$s] for %3$d entities			##1': `Score Value ##2': `Objective Name ##3': `Player Count
    'commands.scoreboard.players.reset.success': `Reset scores of player %1$s									##1': `Player Name
    'commands.scoreboard.players.resetscore.success': `Reset score %1$s of player %2$s							##1': `Objective Name ##2': `Player Name
    'commands.scoreboard.players.set.success': `Set [%1$s] for %2$s to %3$d										##1': `Objective Name ##2': `Player Name ##3': `Score Value
    'commands.scoreboard.players.set.multiple.success': `Set [%1$s] for %2$d entities to %3$d					##1': `Objective Name ##2': `Player Count ##3': `Score Value
    'commands.scoreboard.players.set.tagError': `Could not parse dataTag, reason': `%1$s							##
    'commands.scoreboard.players.set.tagMismatch': `The dataTag does not match for %1$s							##
    'commands.scoreboard.players.score.notFound': `No %1$s score for %2$s found									##1': `Objective Name ##2': `Player Name
    'commands.scoreboard.players.test.failed': `Score %1$d is NOT in range %2$d to %3$d							##1': `Value ##2': `Min Range Value ##3': `Max Range Value
    'commands.scoreboard.players.test.success': `Score %1$d is in range %2$d to %3$d							##1': `Value ##2': `Min Range Value ##3': `Max Range Value
    'commands.scoreboard.players.get.success': `%1$d															##

    // Scoreboards can also handle teams, which are close to what an Objective does	####
    // with just a little extra functionality											####

    'commands.scoreboard.teamNotFound': `No team was found by the name '%1$s'																##1': `Team Name
    'commands.scoreboard.teams.add.alreadyExists': `A team with the name '%1$s' already exists												##1': `Team Name
    'commands.scoreboard.teams.add.displayTooLong': `The display name '%1$s' is too long for a team, it can be at most %2$d characters long	##1': `Team Display Name ##2': `Name Length Limit
    'commands.scoreboard.teams.add.success': `Added new team '%1$s' successfully															##1': `Team Name
    'commands.scoreboard.teams.add.tooLong': `The name '%1$s' is too long for a team, it can be at most %2$d characters long				##1': `Team Name ##2': `Name Length Limit
    'commands.scoreboard.teams.empty.alreadyEmpty': `Team %1$s is already empty, cannot remove nonexistent players							##1': `Team Name
    'commands.scoreboard.teams.empty.success': `Removed all %1$d player(s) from team %2$s													##1': `Number of Players ##2': `Team Name
    'commands.scoreboard.teams.join.failure': `Could not add %1$d player(s) to team %2$s': `%3$s												##1': `Number of Players ##2': `Team Name ##3': `List of Players
    'commands.scoreboard.teams.join.success': `Added %1$d player(s) to team %2$s': `%3$s														##1': `Number of Players ##2': `Team Name ##3': `List of Players
    'commands.scoreboard.teams.leave.failure': `Could not remove %1$d player(s) from their teams': `%2$s										##1': `Number of Players ##2': `Team Name
    'commands.scoreboard.teams.leave.noTeam': `You are not in a team																		##
    'commands.scoreboard.teams.leave.success': `Removed %1$d player(s) from their teams': `%2$s												##1': `Number of Players ##2': `List of Players
    'commands.scoreboard.teams.list.count': `Showing %1$d teams on the scoreboard':	`														##1': `Number of Teams
    'commands.scoreboard.teams.list.empty': `There are no teams registered on the scoreboard												##
    'commands.scoreboard.teams.list.entry': `- %1$s': `'%2$s' has %3$d players																##1': `Team Name ##2': `Team Display Name ##3': `Number of Players
    'commands.scoreboard.teams.list.player.count': `Showing %1$d player(s) in team %2$s':	`												##1': `Number of Players ##2 Team Name
    'commands.scoreboard.teams.list.player.empty': `Team %1$s has no players																##1': `Team Name
    'commands.scoreboard.teams.list.player.entry': `- %2$s': `%1$d (%3$s)																		##1': `Player Name ##2': `Score Value ##3': `Team Display Name
    'commands.scoreboard.teams.option.noValue': `Valid values for option %1$s are': `%2$s														##1': `Option Name ##2': `List of Option Values
    'commands.scoreboard.teams.option.success': `Set option %1$s for team %2$s to %3$s														##1': `Option Name ##2': `Team Name ##3': `Option Value
    'commands.scoreboard.teams.remove.success': `Removed team %1$s																			##1': `Team Name
    'commands.screenshake.description': `Applies shaking to the players' camera with a specified intensity and duration.
    'commands.screenshake.success': `Sent a request to the following players for their camera to shake': `%s
    'commands.screenshake.successStop': `Stopping camera shake for the following players': `%s	#
    'commands.seed.success': `Seed': `%1$s
    'commands.setblock.description': `Changes a block to another block.
    'commands.setblock.failed': `Unable to place block
    'commands.setblock.noChange': `The block couldn't be placed
    'commands.setblock.notFound': `There is no such block with ID/name %1$s
    'commands.setblock.outOfWorld': `Cannot place block outside of the world
    'commands.setblock.success': `Block placed
    'commands.setblock.tagError': `Data tag parsing failed': `%1$s
    'commands.setidletimeout.success': `Successfully set the idle timeout to %1$d minutes.
    'commands.setfixedinvslots.description': `Sets the number of fixed inventory slots for the server.
    'commands.setfixedinvslots.success': `Number of Fixed Inventory Slots set to %1$d
    'commands.setfixedinvslot.description': `Sets a fixed slot to a specified item.
    'commands.setfixedinvslot.success': `Fixed Inventory Slot %1$d set to %2$s
    'commands.globalpause.description': `Sets or gets the paused state of the game for all players.
    'commands.globalpause.success': `Set or got pause state
    'commands.setmaxplayers.description': `Sets the maximum number of players for this game session.
    'commands.setmaxplayers.success': `Set max players to %1$d.
    'commands.setmaxplayers.success.upperbound': `(Bound to maximum allowed connections)
    'commands.setmaxplayers.success.lowerbound': `(Bound to current player count)
    'commands.setworldspawn.description': `Sets the world spawn.
    'commands.setworldspawn.success': `Set the world spawn point to (%1$d, %2$d, %3$d)
    'commands.setworldspawn.wrongDimension': `The world spawn can not be set in this dimension
    'commands.setworldspawn.notAllowedInLegacyWorlds': `The world spawn can not be set in legacy worlds
    'commands.spawnpoint.success.single': `Set %1$s's spawn point to (%2$d, %3$d, %4$d)
    'commands.spawnpoint.description': `Sets the spawn point for a player.
    'commands.spawnpoint.success.multiple.specific': `Set spawn point for %1$s to (%2$d, %3$d, %4$d)
    'commands.spawnpoint.success.multiple.generic': `Set spawn point for %1$s
    'commands.spawnpoint.wrongDimension': `The spawn point cannot be set in this dimension
    'commands.clearspawnpoint.success.single': `Removed %1$s's spawn point
    'commands.clearspawnpoint.description': `Removes the spawn point for a player.
    'commands.clearspawnpoint.success.multiple': `Removed spawn points for %1$s
    'commands.spreadplayers.description': `Teleports entities to random locations.
    'commands.spreadplayers.failure.players': `Could not spread %1$s players around %2$s,%3$s (too many players for space - try using spread of at most %4$s)
    'commands.spreadplayers.failure.players.unsafe': `Could not spread %1$s players around %2$s,%3$s (no safe locations found after %4$s attempts)
    'commands.spreadplayers.failure.teams': `Could not spread %1$s teams around %2$s,%3$s (too many players for space - try using spread of at most %4$s)
    'commands.spreadplayers.info.players': `(Average distance between players is %1$s blocks apart after %2$s iterations)
    'commands.spreadplayers.info.teams': `(Average distance between teams is %1$s blocks apart after %2$s iterations)
    'commands.spreadplayers.spreading.players': `Spreading %1$s players %2$s blocks around %3$s,%4$s (min %5$s blocks apart)
    'commands.spreadplayers.spreading.teams': `Spreading %1$s teams %2$s blocks around %3$s,%4$s (min %5$s blocks apart)
    'commands.spreadplayers.success.players': `Successfully spread %1$s players around %2$s,%3$s
    'commands.spreadplayers.success.teams': `Successfully spread %1$s teams around %2$s,%3$s
    'commands.stats.cleared': `Cleared %1$s stats
    'commands.stats.failed': `Invalid parameters
    'commands.stats.noCompatibleBlock': `Block at %1$d, %2$d, %3$d can not track stats
    'commands.stats.success': `Storing %1$s stats in %2$s on %3$s
    'commands.stop.description': `Stops the server.
    'commands.stop.start': `Stopping the server
    'commands.stopsound.description': `Stops a sound.
    'commands.stopsound.success': `Stopped sound %s for %s
    'commands.stopsound.success.all': `Stopped all sounds for %s
    'commands.structure.description': `Saves or loads a structure in the world.
    'commands.structure.empty.load': `Can't load a structure with no entities and no blocks
    'commands.structure.empty.save': `Can't save a structure with no entities and no blocks
    'commands.structure.invalid.animationTime': `Animation time must be 0 or higher
    'commands.structure.invalid.integrity': `Integrity must be in the range of 0 to 100
    'commands.structure.invalid.name': `Name should be in the format of "name" or "namespace':n`ame". If not namespace is provided, the default one will be assigned.
    'commands.structure.load.success': `Loaded a structure of name %s
    'commands.structure.load.queued': `A placement request has been queued and it will be executed when the specified area is fully loaded.
    'commands.structure.notFound': `The structure %s can't be found. Make sure the name was spelled correctly and try again.
    'commands.structure.save.success': `Saved a structure with name %s
    'commands.structure.size.tooBig': `A structure's size cannot be larger than (%1$d, %2$d, %3$d), it was (%4$d, %5$d, %6$d)
    'commands.structure.size.tooSmall': `A structure's size cannot be smaller than (%1$d, %2$d, %3$d), it was (%4$d, %5$d, %6$d)
    'commands.structure.unknown.action': `Unknown structure action provided
    'commands.structure.unloadedChunks': `The feature to load a structure in an unloaded area hasn't been implemented yet
    'commands.structure.y.tooHigh': `Cannot place blocks outside of the world. Try a value of %d or lower for the Y component of <to': `x y z>.
    'commands.structure.y.tooLow': `Cannot place blocks outside of the world. Try a value greater than %d for the Y component of <to': `x y z>.
    'commands.structure.delete.success': `Structure %s deleted.
    'commands.summon.description': `Summons an entity.
    'commands.summon.failed': `Unable to summon object
    'commands.summon.outOfWorld': `Cannot summon the object out of the world
    'commands.summon.success': `Object successfully summoned
    'commands.summon.tagError': `Data tag parsing failed': `%1$s
    'commands.tag.description': `Manages tags stored in entities.
    'commands.tag.add.failed': `Target either already has the tag or has too many tags
    'commands.tag.add.success.single': `Added tag '%1$s' to %2$s														##1': `Tag string   ##2': `Entity/Player/Item name
    'commands.tag.add.success.multiple': `Added tag '%1$s' to %2$d entities												##1': `Tag string   ##2': `Number of entities (numerals)
    'commands.tag.list.single.empty': `%s has no tags																	##1': `Entity/Player/Item name
    'commands.tag.list.single.success': `%1$s has %2$d tags': `%3$s														##1': `Entity/Player/Item name   ##2': `Number of tags   ##3': `Comma separated list of tags
    'commands.tag.list.multiple.empty': `There are no tags on the %d entities											##1': `Number of entities matching the selector
    'commands.tag.list.multiple.success': `The %1$d entities have %2$d total tags': `%3$s									##1': `Number of entities matching the selector   ##2': `Number of tags   ##3': `Comma separated list of tags
    'commands.tag.remove.failed': `Target does not have this tag
    'commands.tag.remove.success.single': `Removed tag '%1$s' from %2$s													##1': `Tag string   ##2': `Entity/Player/Item name
    'commands.tag.remove.success.multiple': `Removed tag '%1$s' from %2$d entities										##1': `Tag string   ##2': `Number of selector matches
    'commands.tell.description': `Sends a private message to one or more players.
    'commands.tellraw.description': `Sends a JSON message to players.
    'commands.tellraw.jsonException': `Invalid json': `%1$s
    'commands.tellraw.jsonStringException': `Invalid json string data.
    'commands.tellraw.error.noData': `No data was provided.
    'commands.tellraw.error.notArray': `Rawtext object must contain an array. Example': `"rawtext"':[`{..}]
    'commands.tellraw.error.textNotString': `text field in rawtext must contain a string. Example': `"rawtext"':[`{"text"': `"text to display"}]
    'commands.tellraw.error.translateNotString': `translate field in rawtext must contain a language key. Example': `"rawtext"':[`{"translate"': `"gui.ok"}]
    'commands.tellraw.error.selectorNotString': `selector field in rawtext must contain a selector as a string. Example': `"rawtext"':[`{"selector"': `"@e"}]
    'commands.tellraw.error.scoreNotObject': `score field in rawtext must contain an object. Example "rawtext"':[`{"score"': `{"name"': `"my_name", "objective"': `"my_objective"}}]
    'commands.tellraw.error.scoreNameNotString': `name field in the score field must be a string. Example "rawtext"':[`{"score"': `{"name"': `"my_name", "objective"': `"my_objective"}}]
    'commands.tellraw.error.scoreObjectiveNotString': `objective field in the score field must be a string. Example "rawtext"':[`{"score"': `{"name"': `"my_name", "objective"': `"my_objective"}}]
    'commands.tellraw.error.withNotArrayOrRawText': `with field in rawtext must contain a array or another rawtext object. Example 1': `"rawtext"':[`{"translate"': `"chat.type.announcement", "with"': `[ "value1", "value2" ]}]  Example 2': `"rawtext"':[`{"translate"': `"chat.type.announcement", "with"':{`"rawtext"':[`{"text"': `"value1"}, {"text"': `"value2"}]}}]
    'commands.tellraw.error.itemIsNotObject': `Json value in rawtext array was not an object. Example': `"rawtext"': `[{ "text" ': `"my text" }]
    'commands.educlientinfo.description': `Get tenant ID and host status. Intended for CM.
    'commands.testfor.description': `Counts entities (players, mobs, items, etc.) matching specified conditions.
    'commands.testfor.failure': `%1$s did not match the required data structure
    'commands.testfor.success': `Found %1$s
    'commands.testfor.tagError': `Data tag parsing failed': `%1$s
    'commands.testforblock.description': `Tests whether a certain block is in a specific location.
    'commands.testforblock.failed.data': `The block at %1$d,%2$d,%3$d did not match the expected block state.
    'commands.testforblock.failed.nbt': `The block at %1$d,%2$d,%3$d did not have the required NBT keys.
    'commands.testforblock.failed.tile': `The block at %1$d,%2$d,%3$d is %4$s (expected': `%5$s).
    'commands.testforblock.failed.tileEntity': `The block at %1$d,%2$d,%3$d is not a tile entity and cannot support tag matching.
    'commands.testforblock.outOfWorld': `Cannot test for block outside of the world
    'commands.testforblock.success': `Successfully found the block at %1$d,%2$d,%3$d.
    'commands.testforblocks.description': `Tests whether the blocks in two regions match.
    'commands.tickingarea.description': `Add, remove, or list ticking areas.
    'commands.tickingarea.inuse': `%1$d/%2$d ticking areas in use.
    'commands.tickingarea.entitycount': `There are %1$d ticking area(s) from entities with the tick_world component.
    'commands.tickingarea.noneExist.currentDimension': `No ticking areas exist in the current dimension.
    'commands.tickingarea-add-bounds.success': `Added ticking area from %1$d to %2$d.
    'commands.tickingarea-add-bounds.preload.success': `Added ticking area from %1$d to %2$d marked for preload.
    'commands.tickingarea-add-circle.success': `Added ticking area centered at %1$d with a radius of %2$d chunks.
    'commands.tickingarea-add-circle.preload.success': `Added ticking area centered at %1$d with a radius of %2$d chunks marked for preload.
    'commands.tickingarea-add.failure': `Max number of ticking areas (%1$d) has already been reached. Cannot add more ticking areas.
    'commands.tickingarea-add.conflictingname': `A ticking area with the name %1$s already exists.
    'commands.tickingarea-add.chunkfailure': `Ticking area contains more than %1$d chunks, ticking area is too large and cannot be created.
    'commands.tickingarea-add.radiusfailure': `Radius cannot be larger than %1$d, ticking area is too large and cannot be created.
    'commands.tickingarea-remove.success': `Removed ticking area(s)
    'commands.tickingarea-remove.failure': `No ticking areas containing the block position %1$d exist in the current dimension.
    'commands.tickingarea-remove.byname.failure': `No ticking areas named %1$s exist in the current dimension.
    'commands.tickingarea-remove_all.success': `Removed ticking area(s)
    'commands.tickingarea-remove_all.failure': `No ticking areas exist in the current dimension.
    'commands.tickingarea-preload.success': `Updated ticking area(s)
    'commands.tickingarea-preload.byposition.failure': `No ticking areas containing the block position %1$d exist in the current dimension.
    'commands.tickingarea-preload.byname.failure': `No ticking areas named %1$s exist in the current dimension.
    'commands.tickingarea-preload.count': `%1$d matching area(s) are marked for preload.
    'commands.tickingarea-list.chunks': `chunks	## Meaning a chunk of the world.
    'commands.tickingarea-list.circle.radius': `Radius
    'commands.tickingarea-list.preload': `Preload
    'commands.tickingarea-list.success.currentDimension': `List of all ticking areas in current dimension
    'commands.tickingarea-list.success.allDimensions': `List of all ticking areas in all dimensions
    'commands.tickingarea-list.failure.allDimensions': `No ticking areas exist in any dimension.
    'commands.tickingarea-list.to': `to	## Used in the context of "from position to other position"
    'commands.tickingarea-list.type.circle': `Circle
    'commands.time.added': `Added %1$d to the time
    'commands.time.description': `Changes or queries the world's game time.
    'commands.time.disabled': `Always Day is enabled in this world.
    'commands.time.query.day': `Day is %d
    'commands.time.query.daytime': `Daytime is %d
    'commands.time.query.gametime': `Gametime is %d
    'commands.time.set': `Set the time to %1$d
    'commands.time.stop': `Time %1$s
    'commands.title.description': `Controls screen titles.
    'commands.title.success': `Title command successfully executed
    'commands.titleraw.description': `Controls screen titles with JSON messages.
    'commands.titleraw.success': `Titleraw command successfully executed
    'commands.toggledownfall.description': `Toggles the weather.
    'commands.tp.description': `Teleports entities (players, mobs, etc.).
    'commands.tp.notSameDimension': `Unable to teleport because players are not in the same dimension
    'commands.tp.outOfWorld': `Cannot teleport entities outside of the world
    'commands.tp.permission': `You do not have permission to use this slash command.
    'commands.tp.safeTeleportFail': `Unable to teleport %1$s to %2$s because the area wasn't clear of blocks.
    'commands.tp.far': `Unable to teleport %1$s to the unloaded area at %2$s
    'commands.tp.success': `Teleported %1$s to %2$s
    'commands.tp.successVictim': `You have been teleported to %1$s
    'commands.tp.success.coordinates': `Teleported %1$s to %2$s, %3$s, %4$s
    'commands.transferserver.description': `Transfers a player to another server.
    'commands.transferserver.successful': `Transferred player
    'commands.transferserver.invalid.port': `Invalid port (0-65535)
    'commands.trigger.description': `Sets a trigger to be activated.
    'commands.trigger.disabled': `Trigger %1$s is not enabled
    'commands.trigger.invalidMode': `Invalid trigger mode %1$s
    'commands.trigger.invalidObjective': `Invalid trigger name %1$s
    'commands.trigger.invalidPlayer': `Only players can use the /trigger command
    'commands.trigger.success': `Trigger %1$s changed with %2$s %3$s
    'commands.unban.failed': `Could not unban player %1$s
    'commands.unban.success': `Unbanned player %1$s
    'commands.unbanip.invalid': `You have entered an invalid IP address
    'commands.unbanip.success': `Unbanned IP address %1$s
    'commands.validategamelighting.description': `Validate game lighting for a specified region
    'commands.validategamelighting.checkRegionTooBig': `Region to check for lighting is too big! (%1$d > %2$d)
    'commands.validategamelighting.outOfWorld': `Cannot check lighting outside of the world
    'commands.volumearea.description': `Add, remove, or list volumes in the current dimension.
    'commands.volumearea.add.definitionDoesntExist.failure': `No volume definition matching identifier "%1$s".
    'commands.volumearea.add.exceededLimit.failure': `Max number of volumes %1$d has already been reached. Cannot add more volumes.
    'commands.volumearea.add.failure': `Failed to create volume.
    'commands.volumearea.add.success': `Added volume "%1$s" from %2$d to %3$d.
    'commands.volumearea.remove.byName.failure': `No volumes named %1$s exist in the current dimension.
    'commands.volumearea.remove.byPosition.failure': `No volumes containing the block position %1$d exist in the current dimension.
    'commands.volumearea.remove.success': `Removed volume(s) in current dimension
    'commands.volumearea.remove_all.success': `Removed volume(s) in current dimension
    'commands.volumearea.list.success.currentDimension': `List of all volumes in current dimension
    'commands.volumearea.list.success.allDimensions': `List of all volumes in all dimensions
    'commands.volumearea.list.failure.allDimensions': `No volumes exist in any dimension.
    'commands.volumearea.entry.withIdentifier': `- %s': `%s from %d %d %d to %d %d %d
    'commands.volumearea.entry.withoutIdentifier': `- %s': `from %d %d %d to %d %d %d
    'commands.volumearea.noneExist.currentDimension': `No volumes exist in the current dimension.
    'commands.volumearea.inUse': `%1$d/%2$d volumes in use.
    'commands.weather.clear': `Changing to clear weather
    'commands.weather.description': `Sets the weather.
    'commands.weather.disabled': `Weather Cycle isn't enabled in this world.
    'commands.weather.query': `Weather state is': `%s
    'commands.weather.query.clear': `clear
    'commands.weather.query.rain': `rain
    'commands.weather.query.thunder': `thunder
    'commands.weather.rain': `Changing to rainy weather
    'commands.weather.thunder': `Changing to rain and thunder
    'commands.allowlist.add.failed': `Could not add %1$s to the allowlist
    'commands.allowlist.add.success': `Added %1$s to the allowlist
    'commands.allowlist.description': `Manages the server allowlist.
    'commands.allowlist.disabled': `Turned off the allowlist
    'commands.allowlist.enabled': `Turned on the allowlist
    'commands.allowlist.list': `There are %1$d (out of %2$d seen) allowlisted players':
    'commands.allowlist.reloaded': `Allowlist reloaded from file.
    'commands.allowlist.remove.failed': `Could not remove %1$s from the allowlist
    'commands.allowlist.remove.success': `Removed %1$s from the allowlist
    'commands.world_age.description': `Changes or queries the world's age (time since creation).
    'commands.world_age.added': `Added %1$d to the world's age
    'commands.world_age.query': `World age is %d
    'commands.world_age.set': `Set the world's age to %1$d
    'commands.worldborder.center.success': `Set world border center to %1$s,%2$s
    'commands.worldborder.damage.amount.success': `Set world border damage amount to %1$s per block (from %2$s per block)`
    'commands.worldborder.damage.buffer.success': `Set world border damage buffer to %1$s blocks (from %2$s blocks)`
    'commands.worldborder.get.success': `World border is currently %1$s blocks wide`
    'commands.worldborder.set.success': `Set world border to %1$s blocks wide (from %2$s blocks)`
    'commands.worldborder.setSlowly.grow.success': `Growing world border to %1$s blocks wide (up from %2$s blocks) over %3$s seconds`
    'commands.worldborder.setSlowly.shrink.success': `Shrinking world border to %1$s blocks wide (down from %2$s blocks) over %3$s seconds`
    'commands.worldborder.warning.distance.success': `Set world border warning to %1$s blocks away (from %2$s blocks)`
    'commands.worldborder.warning.time.success': `Set world border warning to %1$s seconds away (from %2$s seconds)`
    'commands.worldbuilder.description': `Toggle World Builder status of caller.`
    'commands.worldbuilder.success': `World Builder status updated to %1$s`
    'commands.wsserver.description': `Attempts to connect to the websocket server on the provided URL.`
    'commands.wsserver.invalid.url': `The provided server URL is invalid`
    'commands.wsserver.request.existing': `Another connection request is currently running`
    'commands.wsserver.request.failed': `Could not connect to server': `%1$s`
    'commands.wsserver.success': `Connection established to server': `%1$s`
    'commands.xp.description': `Adds or removes player experience.`
    'commands.xp.failure.widthdrawXp': `Cannot give player negative experience points`
    'commands.xp.success': `Gave %1$d experience to %2$s`
    'commands.xp.success.levels': `Gave %1$d levels to %2$s`
    'commands.xp.success.negative.levels': `Taken %1$d levels from %2$s`
}
*/