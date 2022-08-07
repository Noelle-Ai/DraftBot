import {Entities} from "../../../../core/models/Entity";

module.exports.commandInfo = {
	name: "addgem",
	commandFormat: "<gem>",
	typeWaited: {
		gem: typeVariable.INTEGER
	},
	messageWhenExecuted: "Vous avez maintenant {gem} :gem: !",
	description: "Ajoute la valeur donnée de gemmes à votre joueur",
	commandTestShouldReply: true
};

/**
 * Add gems to the player
 * @param {("fr"|"en")} language - Language to use in the response
 * @param interaction
 * @param {String[]} args=[] - Additional arguments sent with the command
 * @return {String} - The successful message formatted
 */
const addGemsTestCommand = async (language, interaction, args) => {
	const [entity] = await Entities.getOrRegister(interaction.user.id);
	entity.Player.PlayerMissionsInfo.addGems(parseInt(args[0]));
	await entity.Player.PlayerMissionsInfo.save();

	return format(module.exports.commandInfo.messageWhenExecuted, {gem: entity.Player.PlayerMissionsInfo.gems});
};

module.exports.execute = addGemsTestCommand;