import {Database} from "../Database";
import {LogsPlayersMoney} from "./models/LogsPlayersMoney";
import {LogsPlayers} from "./models/LogsPlayers";
import {LogsPlayersHealth} from "./models/LogsPlayersHealth";
import {LogsPlayersExperience} from "./models/LogsPlayersExperience";
import {CreateOptions, Model} from "sequelize";
import {LogsPlayersLevel} from "./models/LogsPlayersLevel";
import {LogsPlayersScore} from "./models/LogsPlayersScore";
import {LogsPlayersGems} from "./models/LogsPlayersGems";
import {LogsServers} from "./models/LogsServers";
import {LogsCommands} from "./models/LogsCommands";
import {LogsPlayersCommands} from "./models/LogsPlayersCommands";
import {LogsSmallEvents} from "./models/LogsSmallEvents";
import {LogsPlayersSmallEvents} from "./models/LogsPlayersSmallEvents";
import {LogsPossibilities} from "./models/LogsPossibilities";
import {LogsPlayersPossibilities} from "./models/LogsPlayersPossibilities";
import {LogsAlterations} from "./models/LogsAlterations";
import {LogsPlayersStandardAlterations} from "./models/LogsPlayersStandardAlterations";
import {LogsPlayersOccupiedAlterations} from "./models/LogsPlayersOccupiedAlterations";
import {LogsUnlocks} from "./models/LogsUnlocks";
import {LogsPlayersClassChanges} from "./models/LogsPlayersClassChanges";
import {LogsPlayersVotes} from "./models/LogsPlayersVotes";
import {LogsServersJoins} from "./models/LogsServersJoins";
import {LogsServersQuits} from "./models/LogsServersQuits";
import MapLink from "../game/models/MapLink";
import {LogsPlayersTravels} from "./models/LogsPlayersTravels";
import {LogsMapLinks} from "./models/LogsMapLinks";
import {LogsMissionsFailed} from "./models/LogsMissionsFailed";
import {LogsMissionsFinished} from "./models/LogsMissionsFinished";
import {LogsMissionsFound} from "./models/LogsMissionsFound";
import {LogsMissionsDailyFinished} from "./models/LogsMissionsDailyFinished";
import {LogsMissionsDaily} from "./models/LogsMissionsDaily";
import {LogsMissionsCampaignProgresses} from "./models/LogsMissionsCampaignProgresses";
import {LogsMissions} from "./models/LogsMissions";
import {LogsPlayers15BestTopweek} from "./models/LogsPlayers15BestTopweek";
import {LogsItemGainsArmor} from "./models/LogsItemsGainsArmor";
import {GenericItemModel} from "../game/models/GenericItemModel";
import {LogsItemGainsObject} from "./models/LogsItemsGainsObject";
import {LogsItemGainsPotion} from "./models/LogsItemsGainsPotion";
import {LogsItemGainsWeapon} from "./models/LogsItemsGainsWeapon";
import {LogsItemSellsArmor} from "./models/LogsItemsSellsArmor";
import {LogsItemSellsObject} from "./models/LogsItemsSellsObject";
import {LogsItemSellsPotion} from "./models/LogsItemsSellsPotion";
import {LogsItemSellsWeapon} from "./models/LogsItemsSellsWeapon";
import {LogsPlayersTimewarps} from "./models/LogsPlayersTimewarps";
import PetEntity, {PetEntities} from "../game/models/PetEntity";
import {LogsPetsNicknames} from "./models/LogsPetsNicknames";
import {LogsPetEntities} from "./models/LogsPetEntities";
import {Guild} from "../game/models/Guild";
import {LogsGuilds} from "./models/LogsGuilds";
import {Players} from "../game/models/Player";
import {LogsGuildsKicks} from "./models/LogsGuildsKicks";
import {LogsDailyPotions} from "./models/LogsDailyPotions";
import {LogsClassicalShopBuyouts} from "./models/LogsClassicalShopBuyouts";
import {LogsGuildShopBuyouts} from "./models/LogsGuildShopBuyouts";
import {LogsMissionShopBuyouts} from "./models/LogsMissionShopBuyouts";
import {getFoodIndexOf} from "../../utils/FoodUtils";
import {LogsDailyTimeouts} from "./models/LogsDailyTimeouts";
import {LogsTopWeekEnd} from "./models/LogsTopWeekEnd";
import {GuildDailyConstants} from "../../constants/GuildDailyConstants";
import {LogsGuildsDailies} from "./models/LogsGuildsDailies";
import {LogsPetsTransfers} from "./models/LogsPetsTransfers";
import {LogsGuildsLeaves} from "./models/LogsGuildsLeaves";
import {LogsGuildsDestroys} from "./models/LogsGuildsDestroys";
import {LogsGuildsEldersRemoves} from "./models/LogsGuildsEldersRemoves";
import {LogsGuildsChiefsChanges} from "./models/LogsGuildsChiefsChanges";
import {LogsPetsFrees} from "./models/LogsPetsFrees";
import {GuildPets} from "../game/models/GuildPet";
import {FightController} from "../../fights/FightController";
import {LogsFightsResults} from "./models/LogsFightsResults";
import {LogsFightsActionsUsed} from "./models/LogsFightsActionsUsed";
import {LogsFightsActions} from "./models/LogsFightsActions";
import {LogsGuildsCreations} from "./models/LogsGuildCreations";
import {LogsGuildsJoins} from "./models/LogsGuildJoins";
import {LogsGuildsExperiences} from "./models/LogsGuildsExperiences";
import {LogsGuildsLevels} from "./models/LogsGuildsLevels";
import {LogsPetsTrades} from "./models/LogsPetsTrades";
import {LogsGuildsDescriptionChanges} from "./models/LogsGuildsDescriptionChanges";
import {LogsGuildsEldersAdds} from "./models/LogsGuildsEldersAdds";
import {LogsPetsSells} from "./models/LogsPetsSells";
import {LogsPetsLovesChanges} from "./models/LogsPetsLovesChanges";
import {LogsGuildsFoodsChanges} from "./models/LogsGuildsFoodsChanges";
import {LogsGuildsNewPets} from "./models/LogsGuildsNewPets";
import {LogsPlayersNewPets} from "./models/LogsPlayersNewPets";
import {EffectsConstants} from "../../constants/EffectsConstants";
import {LogsPlayersDailies} from "./models/LogsPlayersDailies";
import {GuildLikeType, ModelType, NumberChangeReason, ShopItemType} from "../../constants/LogsConstants";
import {getDateLogs} from "../../utils/TimeUtils";
import {PlayerFighter} from "../../fights/fighter/PlayerFighter";
import {LogsPlayersGloryPoints} from "./models/LogsPlayersGloryPoints";
import {LogsPlayers15BestSeason} from "./models/LogsPlayers15BestSeason";
import {LogsSeasonEnd} from "./models/LogsSeasonEnd";
import {LogsPlayerLeagueReward} from "./models/LogsPlayerLeagueReward";
import {LogsPlayersFightPoints} from "./models/LogsPlayersFightPoints";
import {LogsGuildsPoints} from "./models/LogsGuildsPoints";
import {MonsterFighter} from "../../fights/fighter/MonsterFighter";
import {LogsPveFightsResults} from "./models/LogsPveFightsResults";
import {LogsPveFightsActionsUsed} from "./models/LogsPveFightsActionsUsed";
import {LogsPlayersRage} from "./models/LogsPlayersRage";

/**
 * This class is used to log all the changes in the game database
 */
export class LogsDatabase extends Database {

	constructor() {
		super("logs");
	}

	/**
	 * Log when a pet trade occurs
	 * @param firstPet
	 * @param secondPet
	 */
	public static async logPetTrade(firstPet: PetEntity, secondPet: PetEntity): Promise<void> {
		const firstLogPetEntity = await LogsDatabase.findOrCreatePetEntity(firstPet);
		const secondLogPetEntity = await LogsDatabase.findOrCreatePetEntity(secondPet);
		await LogsPetsTrades.create({
			firstPetId: firstLogPetEntity.id,
			secondPetId: secondLogPetEntity.id,
			date: getDateLogs()
		});
	}

	/**
	 * Log when a pet is freed
	 * @param freedPet
	 */
	public static async logPetFree(freedPet: PetEntity): Promise<void> {
		const logPetEntity = await LogsDatabase.findOrCreatePetEntity(freedPet);
		await LogsPetsFrees.create({
			petId: logPetEntity.id,
			date: getDateLogs()
		});
	}

	/**
	 * Log when a pet is sold
	 * @param soldPet
	 * @param sellerId
	 * @param buyerId
	 * @param price
	 */
	public static async logPetSell(soldPet: PetEntity, sellerId: string, buyerId: string, price: number): Promise<void> {
		const logPetEntity = await LogsDatabase.findOrCreatePetEntity(soldPet);
		const seller = await LogsDatabase.findOrCreatePlayer(sellerId);
		const buyer = await LogsDatabase.findOrCreatePlayer(buyerId);
		await LogsPetsSells.create({
			petId: logPetEntity.id,
			sellerId: seller.id,
			buyerId: buyer.id,
			price,
			date: getDateLogs()
		});
	}

	/**
	 * Log when a player leaves a guild
	 * @param guild
	 * @param leftDiscordId
	 */
	public static async logGuildLeave(guild: Guild | GuildLikeType, leftDiscordId: string): Promise<void> {
		const logGuild = await LogsDatabase.findOrCreateGuild(guild);
		const leftPlayer = await LogsDatabase.findOrCreatePlayer(leftDiscordId);
		await LogsGuildsLeaves.create({
			guildId: logGuild.id,
			leftPlayer: leftPlayer.id,
			date: getDateLogs()
		});
	}

	/**
	 * Find or create a player in the log database
	 * @param discordId
	 * @private
	 */
	static async findOrCreatePlayer(discordId: string): Promise<LogsPlayers> {
		return (await LogsPlayers.findOrCreate({
			where: {
				discordId
			}
		}))[0];
	}

	/**
	 * Find or create a pet entity in the log database
	 * @param petEntity
	 * @private
	 */
	private static async findOrCreatePetEntity(petEntity: PetEntity): Promise<LogsPetEntities> {
		return (await LogsPetEntities.findOrCreate({
			where: {
				gameId: petEntity.id,
				creationTimestamp: Math.floor(petEntity.creationDate.valueOf() / 1000.0)
			}
		}))[0];
	}

	/**
	 * Find or create a guild in the log database
	 * @param guild
	 * @private
	 */
	private static async findOrCreateGuild(guild: Guild | GuildLikeType): Promise<LogsGuilds> {
		return (await LogsGuilds.findOrCreate({
			where: {
				gameId: guild.id,
				creationTimestamp: Math.floor(guild.creationDate.valueOf() / 1000.0)
			},
			defaults: {
				name: guild.name
			}
		}))[0];
	}

	/**
	 * Allow to log a number that comes from a player but only for small numbers like his class, his level or campaign level
	 * @param discordId
	 * @param valueFieldName
	 * @param value
	 * @param model
	 * @private
	 */
	private static async logPlayerAndNumber(discordId: string, valueFieldName: string, value: number, model: ModelType): Promise<void> {
		const player = await LogsDatabase.findOrCreatePlayer(discordId);
		const values: { [key: string]: string | number } = {
			playerId: player.id,
			date: getDateLogs()
		};
		values[valueFieldName] = value;
		await model.create(values);
	}

	/**
	 * Allow to log a thing that only is about a player and a date like his daily
	 * @param discordId
	 * @param model
	 * @private
	 */
	private static async logSimplePlayerDate(discordId: string, model: ModelType): Promise<void> {
		const player = await LogsDatabase.findOrCreatePlayer(discordId);
		await model.create({
			playerId: player.id,
			date: getDateLogs()
		});
	}

	/**
	 * Allow to log a mission change about a player
	 * @param discordId
	 * @param missionId
	 * @param variant
	 * @param objective
	 * @param model
	 * @private
	 */
	private static async logMissionChange(discordId: string, missionId: string, variant: number, objective: number, model: ModelType): Promise<void> {
		const player = await LogsDatabase.findOrCreatePlayer(discordId);
		const [mission] = await LogsMissions.findOrCreate({
			where: {
				name: missionId,
				variant,
				objective
			}
		});
		await model.create({
			playerId: player.id,
			missionId: mission.id,
			date: getDateLogs()
		});
	}

	/**
	 * Allow to log a number change for example the xp or the money
	 * @param discordId
	 * @param value
	 * @param reason
	 * @param model
	 * @private
	 */
	private static async logNumberChange(discordId: string, value: number, reason: NumberChangeReason, model: ModelType): Promise<void> {
		const player = await LogsDatabase.findOrCreatePlayer(discordId);
		await model.create({
			playerId: player.id,
			value,
			reason,
			date: getDateLogs()
		});
	}

	/**
	 * Allow to log information about an item in the log database
	 * @param discordId
	 * @param item
	 * @param model
	 * @private
	 */
	private static async logItem(
		discordId: string,
		item: GenericItemModel,
		model: { create: (values?: unknown, options?: CreateOptions<unknown>) => Promise<Model<unknown, unknown>> }
	): Promise<void> {
		const [player] = await LogsPlayers.findOrCreate({
			where: {
				discordId
			}
		});
		await model.create({
			playerId: player.id,
			itemId: item.id,
			date: getDateLogs()
		});
	}

	/**
	 * Log a player's money change
	 * @param discordId
	 * @param value
	 * @param reason
	 */
	public logMoneyChange(discordId: string, value: number, reason: NumberChangeReason): Promise<void> {
		return LogsDatabase.logNumberChange(discordId, value, reason, LogsPlayersMoney);
	}

	/**
	 * Log a player's health change
	 * @param discordId
	 * @param value
	 * @param reason
	 */
	public logHealthChange(discordId: string, value: number, reason: NumberChangeReason): Promise<void> {
		return LogsDatabase.logNumberChange(discordId, value, reason, LogsPlayersHealth);
	}

	/**
	 * Log a player's fightPoints change (except natural regeneration)
	 * @param discordId
	 * @param value
	 * @param reason
	 */
	public logFightPointChange(discordId: string, value: number, reason: NumberChangeReason): Promise<void> {
		return LogsDatabase.logNumberChange(discordId, value, reason, LogsPlayersFightPoints);
	}

	/**
	 * Log a player's xp change
	 * @param discordId
	 * @param value
	 * @param reason
	 */
	public logExperienceChange(discordId: string, value: number, reason: NumberChangeReason): Promise<void> {
		return LogsDatabase.logNumberChange(discordId, value, reason, LogsPlayersExperience);
	}

	/**
	 * Log a player's score change
	 * @param discordId
	 * @param value
	 * @param reason
	 */
	public logScoreChange(discordId: string, value: number, reason: NumberChangeReason): Promise<void> {
		return LogsDatabase.logNumberChange(discordId, value, reason, LogsPlayersScore);
	}

	/**
	 * Log a player's rage change
	 * @param discordId
	 * @param value
	 * @param reason
	 */
	public logRageChange(discordId: string, value: number, reason: NumberChangeReason): Promise<void> {
		return LogsDatabase.logNumberChange(discordId, value, reason, LogsPlayersRage);
	}

	/**
	 * Log a player's gems change
	 * @param discordId
	 * @param value
	 * @param reason
	 */
	public logGemsChange(discordId: string, value: number, reason: NumberChangeReason): Promise<void> {
		return LogsDatabase.logNumberChange(discordId, value, reason, LogsPlayersGems);
	}

	/**
	 * Log a player's level change
	 * @param discordId
	 * @param level
	 */
	public logLevelChange(discordId: string, level: number): Promise<void> {
		return LogsDatabase.logPlayerAndNumber(discordId, "level", level, LogsPlayersLevel);
	}

	/**
	 * Record the usage of a command in the log database
	 * @param discordId
	 * @param serverId
	 * @param commandName
	 */
	public async logCommandUsage(discordId: string, serverId: string, commandName: string): Promise<void> {
		const player = await LogsDatabase.findOrCreatePlayer(discordId);
		const [server] = await LogsServers.findOrCreate({
			where: {
				discordId: serverId
			}
		});
		const [command] = await LogsCommands.findOrCreate({
			where: {
				commandName
			}
		});
		await LogsPlayersCommands.create({
			playerId: player.id,
			serverId: server.id,
			commandId: command.id,
			date: getDateLogs()
		});
	}

	/**
	 * Log the appearance of a small event
	 * @param discordId
	 * @param name
	 */
	public async logSmallEvent(discordId: string, name: string): Promise<void> {
		const player = await LogsDatabase.findOrCreatePlayer(discordId);
		const [smallEvent] = await LogsSmallEvents.findOrCreate({
			where: {
				name
			}
		});
		await LogsPlayersSmallEvents.create({
			playerId: player.id,
			smallEventId: smallEvent.id,
			date: getDateLogs()
		});
	}

	/**
	 * Log the appearance of a big event
	 * @param discordId
	 * @param eventId
	 * @param possibilityEmote
	 * @param issueIndex
	 */
	public async logBigEvent(discordId: string, eventId: number, possibilityEmote: string, issueIndex: number): Promise<void> {
		const player = await LogsDatabase.findOrCreatePlayer(discordId);
		const [possibility] = await LogsPossibilities.findOrCreate({
			where: {
				bigEventId: eventId,
				emote: possibilityEmote === "end" ? null : possibilityEmote,
				issueIndex
			}
		});
		await LogsPlayersPossibilities.create({
			playerId: player.id,
			bigEventId: eventId,
			possibilityId: possibility.id,
			date: getDateLogs()
		});
	}

	/**
	 * Log a new alteration of a player
	 * @param discordId
	 * @param alteration
	 * @param reason
	 * @param duration
	 */
	public async logAlteration(discordId: string, alteration: string, reason: NumberChangeReason, duration: number): Promise<void> {
		const player = await LogsDatabase.findOrCreatePlayer(discordId);
		switch (alteration) {
		case EffectsConstants.EMOJI_TEXT.OCCUPIED:
			await LogsPlayersOccupiedAlterations.create({
				playerId: player.id,
				duration,
				reason,
				date: getDateLogs()
			});
			break;
		default:
			await LogsPlayersStandardAlterations.create({
				playerId: player.id,
				alterationId: (await LogsAlterations.findOrCreate({
					where: {
						alteration: alteration
					}
				}))[0].id,
				reason,
				date: getDateLogs()
			});
		}
	}

	/**
	 * Log when a player has been unlocked from jail
	 * @param buyerDiscordId
	 * @param releasedDiscordId
	 */
	public async logUnlocks(buyerDiscordId: string, releasedDiscordId: string): Promise<void> {
		const [buyer] = await LogsPlayers.findOrCreate({
			where: {
				discordId: buyerDiscordId
			}
		});
		const [released] = await LogsPlayers.findOrCreate({
			where: {
				discordId: releasedDiscordId
			}
		});
		await LogsUnlocks.create({
			buyerId: buyer.id,
			releasedId: released.id,
			date: getDateLogs()
		});
	}

	/**
	 * Log a player's class change
	 * @param discordId
	 * @param classId
	 */
	public logPlayerClassChange(discordId: string, classId: number): Promise<void> {
		return LogsDatabase.logPlayerAndNumber(discordId, "classId", classId, LogsPlayersClassChanges);
	}

	/**
	 * Log a player's vote
	 * @param discordId
	 */
	public logVote(discordId: string): Promise<void> {
		return LogsDatabase.logSimplePlayerDate(discordId, LogsPlayersVotes);
	}

	/**
	 * Log when a player does not succeed a mission
	 * @param discordId
	 * @param missionId
	 * @param variant
	 * @param objective
	 */
	public logMissionFailed(discordId: string, missionId: string, variant: number, objective: number): Promise<void> {
		return LogsDatabase.logMissionChange(discordId, missionId, variant, objective, LogsMissionsFailed);
	}

	/**
	 * Log when a player succeeds a mission except for the daily mission
	 * @param discordId
	 * @param missionId
	 * @param variant
	 * @param objective
	 */
	public logMissionFinished(discordId: string, missionId: string, variant: number, objective: number): Promise<void> {
		return LogsDatabase.logMissionChange(discordId, missionId, variant, objective, LogsMissionsFinished);
	}

	/**
	 * Log when a player starts a mission
	 * @param discordId
	 * @param missionId
	 * @param variant
	 * @param objective
	 */
	public logMissionFound(discordId: string, missionId: string, variant: number, objective: number): Promise<void> {
		return LogsDatabase.logMissionChange(discordId, missionId, variant, objective, LogsMissionsFound);
	}

	/**
	 * Log when a player finish a daily mission
	 * @param discordId
	 */
	public logMissionDailyFinished(discordId: string): Promise<void> {
		return LogsDatabase.logSimplePlayerDate(discordId, LogsMissionsDailyFinished);
	}

	/**
	 * Log when a player progress in the campaign
	 * @param discordId
	 * @param campaignIndex
	 */
	public logMissionCampaignProgress(discordId: string, campaignIndex: number): Promise<void> {
		return LogsDatabase.logPlayerAndNumber(discordId, "number", campaignIndex, LogsMissionsCampaignProgresses);
	}

	/**
	 * Log when a daily mission is refreshed
	 * @param missionId
	 * @param variant
	 * @param objective
	 */
	public async logMissionDailyRefreshed(missionId: string, variant: number, objective: number): Promise<void> {
		const [mission] = await LogsMissions.findOrCreate({
			where: {
				name: missionId,
				variant,
				objective
			}
		});
		await LogsMissionsDaily.create({
			missionId: mission.id,
			date: getDateLogs()
		});
	}

	/**
	 * Log when the bot join a new server
	 * @param discordId
	 */
	public async logServerJoin(discordId: string): Promise<void> {
		const [server] = await LogsServers.findOrCreate({
			where: {
				discordId: discordId
			}
		});
		await LogsServersJoins.create({
			serverId: server.id,
			date: getDateLogs()
		});
	}

	/**
	 * Log when the bot leave a server
	 * @param discordId
	 */
	public async logServerQuit(discordId: string): Promise<void> {
		const [server] = await LogsServers.findOrCreate({
			where: {
				discordId: discordId
			}
		});
		await LogsServersQuits.create({
			serverId: server.id,
			date: getDateLogs()
		});
	}

	/**
	 * Log when new travel is started
	 * @param discordId
	 * @param mapLink
	 */
	public async logNewTravel(discordId: string, mapLink: MapLink): Promise<void> {
		const player = await LogsDatabase.findOrCreatePlayer(discordId);
		const [maplinkLog] = await LogsMapLinks.findOrCreate({
			where: {
				start: mapLink.startMap,
				end: mapLink.endMap
			}
		});
		await LogsPlayersTravels.create({
			playerId: player.id,
			mapLinkId: maplinkLog.id,
			date: getDateLogs()
		});
	}

	/**
	 * Save the top players from the top week. To avoid having too much data, we only save the top 15 players
	 */
	public async log15BestTopWeek(): Promise<void> {
		const players = await Players.getPlayersToPrintTop(await Players.getAllStoredDiscordIds(), 1, 15, true);
		const now = getDateLogs();
		for (let i = 0; i < players.length; i++) {
			const player = await LogsDatabase.findOrCreatePlayer(players[0].discordUserId);
			await LogsPlayers15BestTopweek.create({
				playerId: player.id,
				position: i + 1,
				topWeekScore: players[i].weeklyScore,
				date: now
			});
		}
	}

	/**
	 * Log when a player gain a new item
	 * @param discordId
	 * @param item
	 */
	public logItemGain(discordId: string, item: GenericItemModel): Promise<unknown> {
		let itemCategoryDatabase: { create: (values?: unknown, options?: CreateOptions<unknown>) => Promise<Model<unknown, unknown>> };
		switch (item.categoryName) {
		case "weapons":
			itemCategoryDatabase = LogsItemGainsWeapon;
			break;
		case "armors":
			itemCategoryDatabase = LogsItemGainsArmor;
			break;
		case "objects":
			itemCategoryDatabase = LogsItemGainsObject;
			break;
		case "potions":
			itemCategoryDatabase = LogsItemGainsPotion;
			break;
		default:
			break;
		}
		return LogsDatabase.logItem(discordId, item, itemCategoryDatabase);
	}

	/**
	 * Log when a player receive a time boost
	 * @param discordId
	 * @param time
	 * @param reason
	 */
	public async logTimeWarp(discordId: string, time: number, reason: NumberChangeReason): Promise<void> {
		if (reason === NumberChangeReason.IGNORE) {
			return;
		}
		const player = await LogsDatabase.findOrCreatePlayer(discordId);
		await LogsPlayersTimewarps.create({
			playerId: player.id,
			time,
			reason,
			date: getDateLogs()
		});
	}

	/**
	 * Log when a player sell an item
	 * @param discordId
	 * @param item
	 */
	public logItemSell(discordId: string, item: GenericItemModel): Promise<unknown> {
		let itemCategoryDatabase: { create: (values?: unknown, options?: CreateOptions<unknown>) => Promise<Model<unknown, unknown>> };
		switch (item.categoryName) {
		case "weapons":
			itemCategoryDatabase = LogsItemSellsWeapon;
			break;
		case "armors":
			itemCategoryDatabase = LogsItemSellsArmor;
			break;
		case "objects":
			itemCategoryDatabase = LogsItemSellsObject;
			break;
		case "potions":
			itemCategoryDatabase = LogsItemSellsPotion;
			break;
		default:
			break;
		}
		return LogsDatabase.logItem(discordId, item, itemCategoryDatabase);
	}

	/**
	 * Log when a player rename its pet
	 * @param petRenamed
	 */
	public async logPetNickname(petRenamed: PetEntity): Promise<void> {
		const pet = await LogsDatabase.findOrCreatePetEntity(petRenamed);
		await LogsPetsNicknames.create({
			petId: pet.id,
			name: petRenamed.nickname,
			date: getDateLogs()
		});
	}

	/**
	 * Log when the shop refresh the daily potion
	 * @param potionId
	 */
	public async logDailyPotion(potionId: number): Promise<void> {
		await LogsDailyPotions.create({
			potionId,
			date: getDateLogs()
		});
	}

	/**
	 * Log when a player is kicked from a guild
	 * @param guild
	 * @param kickedDiscordId
	 */
	public async logGuildKick(guild: Guild, kickedDiscordId: string): Promise<void> {
		const logGuild = await LogsDatabase.findOrCreateGuild(guild);
		const kickedPlayer = await LogsDatabase.findOrCreatePlayer(kickedDiscordId);
		await LogsGuildsKicks.create({
			guildId: logGuild.id,
			kickedPlayer: kickedPlayer.id,
			date: getDateLogs()
		});
	}

	/**
	 * Log when anything is bought from the shop
	 * @param discordId
	 * @param shopItem
	 */
	public async logClassicalShopBuyout(discordId: string, shopItem: ShopItemType): Promise<void> {
		const logPlayer = await LogsDatabase.findOrCreatePlayer(discordId);
		await LogsClassicalShopBuyouts.create({
			playerId: logPlayer.id,
			shopItem,
			date: getDateLogs()
		});
	}

	/**
	 * Log when anything is bought from the guild shop
	 * @param discordId
	 * @param shopItem
	 */
	public async logGuildShopBuyout(discordId: string, shopItem: ShopItemType): Promise<void> {
		const logPlayer = await LogsDatabase.findOrCreatePlayer(discordId);
		await LogsGuildShopBuyouts.create({
			playerId: logPlayer.id,
			shopItem,
			amount: 1,
			date: getDateLogs()
		});
	}

	/**
	 * Log which type of food is bought from the guild shops
	 * @param discordId
	 * @param shopItemName
	 * @param amount
	 */
	public async logFoodGuildShopBuyout(discordId: string, shopItemName: string, amount: number): Promise<void> {
		const shopItem = getFoodIndexOf(shopItemName) + 6; // Les items de l'enum sont alignés sur les items du shop de guilde, c'est-à-dire décalés de 6.
		const logPlayer = await LogsDatabase.findOrCreatePlayer(discordId);
		await LogsGuildShopBuyouts.create({
			playerId: logPlayer.id,
			shopItem,
			amount,
			date: getDateLogs()
		});
	}

	/**
	 * Log when a daily ti
	 * @param petLoveChange
	 */
	public async logDailyTimeout(petLoveChange: boolean): Promise<void> {
		await LogsDailyTimeouts.create({
			petLoveChange,
			date: getDateLogs()
		});
	}

	/**
	 * Log when the weekly top end
	 */
	public async logTopWeekEnd(): Promise<void> {
		await LogsTopWeekEnd.create({
			date: getDateLogs()
		});
	}

	/**
	 * Log when the weekly top end
	 */
	public async logSeasonEnd(): Promise<void> {
		await LogsSeasonEnd.create({
			date: getDateLogs()
		});
	}

	/**
	 * Log when anything is bought from the mission shop
	 * @param discordId
	 * @param shopItem
	 */
	public async logMissionShopBuyout(discordId: string, shopItem: ShopItemType): Promise<void> {
		const logPlayer = await LogsDatabase.findOrCreatePlayer(discordId);
		await LogsMissionShopBuyouts.create({
			playerId: logPlayer.id,
			shopItem,
			date: getDateLogs()
		});
	}

	/**
	 * Log when a guild ask for its daily reward
	 * @param guild
	 * @param rewardResult
	 */
	public async logGuildDaily(guild: Guild, rewardResult: string): Promise<void> {
		const logGuild = await LogsDatabase.findOrCreateGuild(guild);
		const reward = Object.values(GuildDailyConstants.REWARD_TYPES).indexOf(rewardResult);
		await LogsGuildsDailies.create({
			guildId: logGuild.id,
			reward,
			date: getDateLogs()
		});
	}

	/**
	 * Log a pet transfer
	 * @param guildPet
	 * @param playerPet
	 */
	public async logPetTransfer(guildPet: PetEntity, playerPet: PetEntity): Promise<void> {
		const logGuildPet = guildPet ? await LogsDatabase.findOrCreatePetEntity(guildPet) : null;
		const logPlayerPet = playerPet ? await LogsDatabase.findOrCreatePetEntity(playerPet) : null;
		await LogsPetsTransfers.create({
			playerPetId: logPlayerPet ? logPlayerPet.id : null,
			guildPetId: logGuildPet ? logGuildPet.id : null,
			date: getDateLogs()
		});
	}

	/**
	 * Log when a guild is destroyed
	 * @param guild
	 */
	public async logGuildDestroy(guild: Guild): Promise<void> {
		const guildInfos: GuildLikeType = {
			id: guild.id,
			name: guild.name,
			creationDate: guild.creationDate,
			chiefId: guild.chiefId,
			guildPets: await GuildPets.getOfGuild(guild.id)
		};
		const logGuild = await LogsDatabase.findOrCreateGuild(guildInfos);
		for (const member of await Players.getByGuild(guildInfos.id)) {
			if (member.id !== guildInfos.chiefId) {
				await LogsDatabase.logGuildLeave(guild, member.discordUserId);
			}
		}
		for (const guildPet of guildInfos.guildPets) {
			const petEntity = await PetEntities.getById(guildPet.petEntityId);
			await LogsDatabase.logPetFree(petEntity);
		}
		await LogsGuildsDestroys.create({
			guildId: logGuild.id,
			date: getDateLogs()
		});
	}

	/**
	 * Log when an elder is demoted
	 * @param guild
	 * @param removedPlayerId
	 */
	public async logGuildElderRemove(guild: Guild, removedPlayerId: number): Promise<void> {
		const logGuild = await LogsDatabase.findOrCreateGuild(guild);
		await LogsGuildsEldersRemoves.create({
			guildId: logGuild.id,
			removedElder: (await LogsDatabase.findOrCreatePlayer((await Players.getById(removedPlayerId)).discordUserId)).id,
			date: getDateLogs()
		});
	}

	/**
	 * Log when a guild's chief is changed
	 * @param guild
	 * @param newChiefId
	 */
	public async logGuildChiefChange(guild: Guild, newChiefId: number): Promise<void> {
		const logGuild = await LogsDatabase.findOrCreateGuild(guild);
		const logNewChiefId = (await LogsDatabase.findOrCreatePlayer((await Players.getById(newChiefId)).discordUserId)).id;
		await LogsGuildsChiefsChanges.create({
			guildId: logGuild.id,
			newChief: logNewChiefId,
			date: getDateLogs()
		});
	}

	/**
	 * Log when a guild is created
	 * @param creatorDiscordId
	 * @param guild
	 */
	public async logGuildCreation(creatorDiscordId: string, guild: Guild): Promise<void> {
		const creator = await LogsDatabase.findOrCreatePlayer(creatorDiscordId);
		const guildInstance = await LogsDatabase.findOrCreateGuild(guild);
		await LogsGuildsCreations.create({
			guildId: guildInstance.id,
			creatorId: creator.id,
			date: getDateLogs()
		});
	}

	/**
	 * Log when a player joins a guild
	 * @param adderDiscordId
	 * @param addedDiscordId
	 * @param guild
	 */
	public async logGuildJoin(adderDiscordId: string | null, addedDiscordId: string, guild: Guild): Promise<void> {
		const adder = await LogsDatabase.findOrCreatePlayer(adderDiscordId);
		const added = await LogsDatabase.findOrCreatePlayer(addedDiscordId);
		const guildInstance = await LogsDatabase.findOrCreateGuild(guild);
		await LogsGuildsJoins.create({
			guildId: guildInstance.id,
			adderId: adder.id,
			addedId: added.id,
			date: getDateLogs()
		});
	}

	/**
	 * Log all the information about a fight, this is called at the end of a fight
	 * @param fight
	 */
	public async logFight(fight: FightController): Promise<number> {
		if (fight.fighters[0] instanceof PlayerFighter && fight.fighters[1] instanceof PlayerFighter) {
			const player1 = fight.fighters[(fight.turn + 1) % 2] as PlayerFighter; // Odd turn = fighters[0] is inverted
			const player1Id = (await LogsDatabase.findOrCreatePlayer(player1.player.discordUserId)).id;
			const player2 = fight.fighters[0] === player1 ? fight.fighters[1] : fight.fighters[0];
			const player2Id = (await LogsDatabase.findOrCreatePlayer(player2.player.discordUserId)).id;
			const winner = fight.getWinnerFighter() === player1 ? 1 : 2;
			const fightResult = await LogsFightsResults.create({
				player1Id: player1Id,
				player1Points: player1.player.score,
				player2Id: player2Id,
				player2Points: player2.player.score,
				turn: fight.turn,
				winner: fight.isADraw() ? 0 : winner,
				friendly: fight.friendly,
				date: getDateLogs()
			});
			for (const player of [player1, player2]) {
				const fightActionsUsed: { [action: string]: number } = {};
				for (const fightAction of player.fightActionsHistory) {
					fightActionsUsed[fightAction.name] ? fightActionsUsed[fightAction.name]++ : fightActionsUsed[fightAction.name] = 1;
				}
				for (const [action, count] of Object.entries(fightActionsUsed)) {
					const [fightAction] = await LogsFightsActions.findOrCreate({
						where: {
							name: action,
							classId: player.player.class
						}
					});
					await LogsFightsActionsUsed.create({
						fightId: fightResult.id,
						player: player === player1 ? 1 : 2,
						actionId: fightAction.id,
						count
					});
				}
			}
			return fightResult.id;
		}
		return null;
	}

	/**
	 * Log all the information about a pve fight, this is called at the end of a fight
	 * @param fight
	 */
	public async logPveFight(fight: FightController): Promise<void> {
		let player: PlayerFighter;
		let monster: MonsterFighter;

		if (fight.fighters[0] instanceof PlayerFighter && fight.fighters[1] instanceof MonsterFighter) {
			player = fight.fighters[0] as PlayerFighter;
			monster = fight.fighters[1] as MonsterFighter;
		}
		else if (fight.fighters[0] instanceof MonsterFighter && fight.fighters[1] instanceof PlayerFighter) {
			player = fight.fighters[1] as PlayerFighter;
			monster = fight.fighters[0] as MonsterFighter;
		}

		if (player && monster) {
			const playerId = (await LogsDatabase.findOrCreatePlayer(player.player.discordUserId)).id;
			const monsterStats = monster.getBaseStats();
			const winner = fight.getWinnerFighter();
			const fightResult = await LogsPveFightsResults.create({
				playerId,
				monsterId: monster.monster.id,
				monsterLevel: monster.level,
				monsterFightPoints: monsterStats.maxFightPoint,
				monsterAttack: monsterStats.attack,
				monsterDefense: monsterStats.defense,
				monsterSpeed: monsterStats.speed,
				turn: fight.turn,
				winner: winner === null ? 0 : winner === player ? 1 : 2,
				date: getDateLogs()
			});
			const fightActionsUsed: { [action: string]: number } = {};
			for (const fightAction of player.fightActionsHistory) {
				fightActionsUsed[fightAction.name] ? fightActionsUsed[fightAction.name]++ : fightActionsUsed[fightAction.name] = 1;
			}
			for (const [action, count] of Object.entries(fightActionsUsed)) {
				const [fightAction] = await LogsFightsActions.findOrCreate({
					where: {
						name: action,
						classId: player.player.class
					}
				});
				await LogsPveFightsActionsUsed.create({
					pveFightId: fightResult.id,
					actionId: fightAction.id,
					count
				});
			}
		}
	}

	/**
	 * Log when a guild experience changes
	 * @param guild
	 * @param reason
	 */
	public async logGuildExperienceChange(guild: Guild, reason: NumberChangeReason): Promise<void> {
		const guildInstance = await LogsDatabase.findOrCreateGuild(guild);
		await LogsGuildsExperiences.create({
			guildId: guildInstance.id,
			experience: guild.experience,
			reason,
			date: getDateLogs()
		});
	}

	/**
	 * Log when a guild points changes
	 * @param guild
	 * @param reason
	 */
	public async logGuildPointsChange(guild: Guild, reason: NumberChangeReason): Promise<void> {
		const guildInstance = await LogsDatabase.findOrCreateGuild(guild);
		await LogsGuildsPoints.create({
			guildId: guildInstance.id,
			points: guild.score,
			reason,
			date: getDateLogs()
		});
	}

	/**
	 * Log when a guild description changes
	 * @param discordId
	 * @param guild
	 */
	public async logGuildDescriptionChange(discordId: string, guild: Guild): Promise<void> {
		const player = await LogsDatabase.findOrCreatePlayer(discordId);
		const guildInstance = await LogsDatabase.findOrCreateGuild(guild);
		await LogsGuildsDescriptionChanges.create({
			guildId: guildInstance.id,
			playerId: player.id,
			description: guild.guildDescription,
			date: getDateLogs()
		});
	}

	/**
	 * Log when a pet has its love changed
	 * @param petEntity
	 * @param reason
	 */
	public async logPetLoveChange(petEntity: PetEntity, reason: NumberChangeReason): Promise<void> {
		const logPet = await LogsDatabase.findOrCreatePetEntity(petEntity);
		await LogsPetsLovesChanges.create({
			petId: logPet.id,
			lovePoints: petEntity.lovePoints,
			reason,
			date: getDateLogs()
		});
	}

	/**
	 * Log when guild food changes
	 * @param guild
	 * @param food
	 * @param total
	 * @param reason
	 */
	public async logGuildsFoodChanges(guild: Guild, food: number, total: number, reason: NumberChangeReason): Promise<void> {
		const guildInstance = await LogsDatabase.findOrCreateGuild(guild);
		await LogsGuildsFoodsChanges.create({
			guildId: guildInstance.id,
			food,
			total,
			reason,
			date: getDateLogs()
		});
	}

	/**
	 * Log when a guild gets a new pet
	 * @param guild
	 * @param petEntity
	 */
	public async logGuildNewPet(guild: Guild, petEntity: PetEntity): Promise<void> {
		const petEntityInstance = await LogsDatabase.findOrCreatePetEntity(petEntity);
		const guildInstance = await LogsDatabase.findOrCreateGuild(guild);
		await LogsGuildsNewPets.create({
			guildId: guildInstance.id,
			petId: petEntityInstance.id,
			date: getDateLogs()
		});
	}

	/**
	 * Log when a player gets a new pet
	 * @param discordId
	 * @param petEntity
	 */
	public async logPlayerNewPet(discordId: string, petEntity: PetEntity): Promise<void> {
		const petEntityInstance = await LogsDatabase.findOrCreatePetEntity(petEntity);
		const playerInstance = await LogsDatabase.findOrCreatePlayer(discordId);
		await LogsPlayersNewPets.create({
			playerId: playerInstance.id,
			petId: petEntityInstance.id,
			date: getDateLogs()
		});
	}

	/**
	 * Log when a member of a guild gets promoted to elder
	 * @param guild
	 * @param addedPlayerId
	 */
	public async logGuildElderAdd(guild: Guild, addedPlayerId: string): Promise<void> {
		const logGuild = await LogsDatabase.findOrCreateGuild(guild);
		const player = await LogsDatabase.findOrCreatePlayer(addedPlayerId);
		await LogsGuildsEldersAdds.create({
			guildId: logGuild.id,
			addedElder: player.id,
			date: getDateLogs()
		});
	}

	/**
	 * Log when a guild levels up
	 * @param guild
	 */
	public async logGuildLevelUp(guild: Guild): Promise<void> {
		const guildInstance = await LogsDatabase.findOrCreateGuild(guild);
		await LogsGuildsLevels.create({
			guildId: guildInstance.id,
			level: guild.level,
			date: getDateLogs()
		});
	}

	/**
	 * Log when a player ask for his daily reward
	 * @param discordId
	 * @param item
	 */
	public async logPlayerDaily(discordId: string, item: GenericItemModel): Promise<void> {
		await LogsDatabase.logItem(discordId, item, LogsPlayersDailies);
	}

	/**
	 * Log when a player's elo changes
	 * @param discordId
	 * @param gloryPoints
	 * @param reason
	 * @param fightId
	 */
	public async logPlayersGloryPoints(discordId: string, gloryPoints: number, reason: NumberChangeReason, fightId: number = null): Promise<void> {
		const player = await LogsDatabase.findOrCreatePlayer(discordId);
		await LogsPlayersGloryPoints.create({
			playerId: player.id,
			value: gloryPoints,
			reason,
			fightId,
			date: getDateLogs()
		});
	}

	/**
	 * Save the top players from the season ranking. To avoid having too much data, we only save the top 15 players
	 */
	public async log15BestSeason(): Promise<void> {
		const players = await Players.getPlayersToPrintGloryTop(await Players.getAllStoredDiscordIds(), 1, 15);
		const now = getDateLogs();
		for (let i = 0; i < players.length; i++) {
			const player = await LogsDatabase.findOrCreatePlayer(players[0].discordUserId);
			await LogsPlayers15BestSeason.create({
				playerId: player.id,
				position: i + 1,
				seasonGlory: players[i].gloryPoints,
				date: now
			});
		}
	}

	/**
	 * Save when a player ask for his league reward
	 * @param discordId
	 * @param leagueLastSeason
	 */
	public async logPlayerLeagueReward(discordId: string, leagueLastSeason: number): Promise<void> {
		const player = await LogsDatabase.findOrCreatePlayer(discordId);
		await LogsPlayerLeagueReward.create({
			playerId: player.id,
			leagueLastSeason,
			date: getDateLogs()
		});
	}
}