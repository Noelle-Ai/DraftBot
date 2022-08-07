import {SmallEvent} from "./SmallEvent";
import Entity from "../models/Entity";
import {CommandInteraction} from "discord.js";
import {DraftBotEmbed} from "../messages/DraftBotEmbed";
import {Translations} from "../Translations";
import {Maps} from "../Maps";
import {RandomUtils} from "../utils/RandomUtils";
import {Data} from "../Data";
import {format} from "../utils/StringFormatter";
import {Constants} from "../Constants";
import {millisecondsToMinutes, minutesDisplay} from "../utils/TimeUtils";
import {MissionsController} from "../missions/MissionsController";

export const smallEvent: SmallEvent = {
	canBeExecuted(): Promise<boolean> {
		return Promise.resolve(true);
	},

	async executeSmallEvent(interaction: CommandInteraction, language: string, entity: Entity, seEmbed: DraftBotEmbed): Promise<void> {
		const outRand = RandomUtils.draftbotRandom.integer(0, 2);
		const transIntroSE = Translations.getModule("smallEventsIntros", language).getRandom("intro");
		const tr = Translations.getModule("smallEvents.bigBadEvent", language);
		const base = seEmbed.description + transIntroSE;
		const alterationObject = tr.getObject("alteration.stories");
		let lifeLoss, seFallen, moneyLoss;
		switch (outRand) {
		case 0:
			lifeLoss = RandomUtils.draftbotRandom.integer(Constants.SMALL_EVENT.MINIMUM_HEALTH_LOST_BIG, Constants.SMALL_EVENT.MAXIMUM_HEALTH_LOST_BIG);
			seEmbed.setDescription(base + format(tr.getRandom("lifeLoss.stories"), {lifeLoss: lifeLoss}));
			await entity.addHealth(-lifeLoss, interaction.channel, language);
			break;
		case 1:
			seFallen = alterationObject[RandomUtils.randInt(0, alterationObject.length)];
			seEmbed.setDescription(base + format(seFallen.sentence, {
				alteTime: minutesDisplay(millisecondsToMinutes(Data.getModule("models.players").getNumber("effectMalus." + seFallen.alte))),
				alteEmoji: seFallen.alte
			}));
			await Maps.applyEffect(entity.Player, seFallen.alte);
			if (seFallen.tags) {
				for (let i = 0; i < seFallen.tags.length; i++) {
					await MissionsController.update(entity, interaction.channel, language, {
						missionId: seFallen.tags[i],
						params: {tags: seFallen.tags}
					});
				}
			}
			break;
		default:
			moneyLoss = RandomUtils.draftbotRandom.integer(Constants.SMALL_EVENT.MINIMUM_MONEY_LOST_BIG, Constants.SMALL_EVENT.MAXIMUM_MONEY_LOST_BIG);
			seEmbed.setDescription(base + format(tr.getRandom("moneyLoss.stories"), {moneyLost: moneyLoss}));
			await entity.Player.addMoney(entity, -moneyLoss, interaction.channel, language);
			break;
		}
		await interaction.reply({embeds: [seEmbed]});
		console.log(entity.discordUserId + " got big bad event.");
		await entity.Player.killIfNeeded(entity, interaction.channel, language);
		await entity.Player.save();
		await entity.save();
	}
};