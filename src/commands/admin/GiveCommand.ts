import {Constants} from "../../core/Constants";
import {format} from "../../core/utils/StringFormatter";
import {DraftBotValidateReactionMessage} from "../../core/messages/DraftBotValidateReactionMessage";
import {DraftBotEmbed} from "../../core/messages/DraftBotEmbed";
import {TranslationModule, Translations} from "../../core/Translations";
import {ICommand} from "../ICommand";
import {SlashCommandBuilder} from "@discordjs/builders";
import {APIApplicationCommandOptionChoice, CommandInteraction} from "discord.js";
import {GenericItemModel} from "../../core/database/game/models/GenericItemModel";
import {draftBotInstance} from "../../core/bot";
import {replyErrorMessage, sendErrorMessage} from "../../core/utils/ErrorUtils";
import {discordIdToMention} from "../../core/utils/StringUtils";
import {ChangeValueAdminCommands} from "../ChangeValueAdminCommands";
import {getItemByIdAndCategory} from "../../core/utils/ItemUtils";
import {SlashCommandBuilderGenerator} from "../SlashCommandBuilderGenerator";
import {Players} from "../../core/database/game/models/Player";
import {ItemConstants} from "../../core/constants/ItemConstants";
import {sendNotificationToPlayer} from "../../core/utils/MessageUtils";

/**
 * Get the end callback of the give command
 * @param users
 * @param tr
 * @param item
 * @param interaction
 */
function getCallback(users: Set<string>, tr: TranslationModule, item: GenericItemModel, interaction: CommandInteraction) {
	return async (validateMessage: DraftBotValidateReactionMessage): Promise<void> => {
		if (!validateMessage.isValidated()) {
			await sendErrorMessage(
				interaction.user,
				interaction,
				tr.language,
				tr.get("errors.commandCanceled"),
				true
			);
			return;
		}
		let descString = "";
		for (const user of users) {
			const playerToEdit = await Players.getByDiscordUserId(user);
			if (!playerToEdit) {
				descString += tr.format("giveError.baseText", {
					user,
					mention: discordIdToMention(user),
					reason: tr.get("giveError.reasons.invalidMention")
				});
				continue;
			}
			if (!await playerToEdit.giveItem(item)) {
				descString += tr.format("giveError.baseText", {
					user,
					mention: discordIdToMention(user),
					reason: tr.get("giveError.reasons.noSpace")
				});
				continue;
			}
			descString += format(tr.get("giveSuccess"), {
				user,
				mention: discordIdToMention(user)
			});
			const embed = new DraftBotEmbed()
				.setTitle(tr.get("dm.title"))
				.setDescription(tr.format("dm.description", {
					item: item.toString(tr.language, null)
				}));
			await sendNotificationToPlayer(playerToEdit, embed, tr.language);
			draftBotInstance.logsDatabase.logItemGain(playerToEdit.discordUserId, item).then();
		}
		await interaction.followUp({
			embeds: [new DraftBotEmbed()
				.formatAuthor(tr.get("resultTitle"), interaction.user)
				.setDescription(descString)]
		});
	};
}

/**
 * Allow the bot owner to give an item to somebody
 * @param interaction
 * @param {("fr"|"en")} language - Language to use in the response
 */
async function executeCommand(interaction: CommandInteraction, language: string): Promise<void> {
	const tr = Translations.getModule("commands.give", language);
	const usersToChange = (interaction.options.get("users").value as string).split(" ");
	if (usersToChange.length > 50) {
		await replyErrorMessage(
			interaction,
			language,
			tr.get("errors.tooMuchPeople")
		);
		return;
	}
	const category = interaction.options.get("category").value as number;
	const itemId = interaction.options.get("itemid").value as number;
	const item = await getItemByIdAndCategory(itemId, category);
	if (item === null) {
		await replyErrorMessage(interaction, language, tr.get("errors.wrongItemId"));
		return;
	}

	const users = await ChangeValueAdminCommands.getConcernedUsers(usersToChange, interaction, tr);

	await new DraftBotValidateReactionMessage(
		interaction.user,
		getCallback(users, tr, item, interaction)
	)
		.formatAuthor(
			tr.get("confirmTitle"),
			interaction.user
		)
		.setDescription(tr.format("confirmDesc", {
			item: item.toString(language, null),
			usersCount: users.size
		}))
		.reply(interaction);
}

const currentCommandFrenchTranslations = Translations.getModule("commands.give", Constants.LANGUAGE.FRENCH);
const currentCommandEnglishTranslations = Translations.getModule("commands.give", Constants.LANGUAGE.ENGLISH);

/**
 * Get a displayable choice from the item category
 * @param categoryId
 */
function getChoiceFromItemType(categoryId: number): APIApplicationCommandOptionChoice<number> {
	return {
		name: currentCommandEnglishTranslations.get("optionCategoryChoices")[categoryId],
		"name_localizations": {
			fr: currentCommandFrenchTranslations.get("optionCategoryChoices")[categoryId]
		},
		value: categoryId
	};
}

export const commandInfo: ICommand = {
	slashCommandBuilder: SlashCommandBuilderGenerator.generateBaseCommand(currentCommandFrenchTranslations, currentCommandEnglishTranslations)
		.addIntegerOption(option => option.setName(currentCommandEnglishTranslations.get("optionCategoryName"))
			.setNameLocalizations({
				fr: currentCommandFrenchTranslations.get("optionCategoryName")
			})
			.setDescription(currentCommandEnglishTranslations.get("optionCategoryDescription"))
			.setDescriptionLocalizations({
				fr: currentCommandFrenchTranslations.get("optionCategoryDescription")
			})
			.setRequired(true)
			.addChoices(
				getChoiceFromItemType(ItemConstants.CATEGORIES.WEAPON),
				getChoiceFromItemType(ItemConstants.CATEGORIES.ARMOR),
				getChoiceFromItemType(ItemConstants.CATEGORIES.POTION),
				getChoiceFromItemType(ItemConstants.CATEGORIES.OBJECT)
			)
		)
		.addIntegerOption(option => option.setName(currentCommandEnglishTranslations.get("optionItemIdName"))
			.setNameLocalizations({
				fr: currentCommandFrenchTranslations.get("optionItemIdName")
			})
			.setDescription(currentCommandEnglishTranslations.get("optionItemIdDescription"))
			.setDescriptionLocalizations({
				fr: currentCommandFrenchTranslations.get("optionItemIdDescription")
			})
			.setRequired(true))
		.addStringOption(option => option.setName(currentCommandEnglishTranslations.get("optionUsersIdName"))
			.setNameLocalizations({
				fr: currentCommandFrenchTranslations.get("optionUsersIdName")
			})
			.setDescription(currentCommandEnglishTranslations.get("optionUsersIdDescription"))
			.setDescriptionLocalizations({
				fr: currentCommandFrenchTranslations.get("optionUsersIdDescription")
			})
			.setRequired(true)) as SlashCommandBuilder,
	executeCommand,
	requirements: {
		userPermission: Constants.ROLES.USER.BOT_OWNER
	},
	mainGuildCommand: true
};