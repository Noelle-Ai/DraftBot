import {Entities} from "../../../../core/database/game/models/Entity";
import {format} from "../../../../core/utils/StringFormatter";
import {CommandInteraction} from "discord.js";
import {Constants} from "../../../../core/Constants";
import {ITestCommand} from "../../../../core/CommandsTest";

export const commandInfo: ITestCommand = {
	name: "advancepetfree",
	aliases: ["apfree"],
	commandFormat: "<time>",
	typeWaited: {
		time: Constants.TEST_VAR_TYPES.INTEGER
	},
	messageWhenExecuted: "Vous avez avancé votre dernier petfree de {time} minutes !",
	description: "Avance le dernier petfree de votre joueur d'une durée en minutes donnée",
	commandTestShouldReply: true,
	execute: null // defined later
};

/**
 * Quick travel your petfree of a given time
 * @param {("fr"|"en")} language - Language to use in the response
 * @param interaction
 * @param {String[]} args=[] - Additional arguments sent with the command
 * @return {String} - The successful message formatted
 */
const advancePetFreeTestCommand = async (language: string, interaction: CommandInteraction, args: string[]): Promise<string> => {
	const [entity] = await Entities.getOrRegister(interaction.user.id);
	entity.Player.lastPetFree = new Date(entity.Player.lastPetFree.valueOf() - parseInt(args[0], 10) * 60000);
	await entity.Player.save();
	return format(commandInfo.messageWhenExecuted, {time: args[0]});
};

commandInfo.execute = advancePetFreeTestCommand;
