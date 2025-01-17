import {Constants} from "../../../../core/Constants";
import {CommandInteraction} from "discord.js";
import {botConfig, draftBotInstance} from "../../../../core/bot";
import {ITestCommand} from "../../../../core/CommandsTest";
import {LogsDatabase} from "../../../../core/database/logs/LogsDatabase";
import {GameDatabase} from "../../../../core/database/game/GameDatabase";

export const commandInfo: ITestCommand = {
	name: "migration",
	commandFormat: "<database> <number>",
	typeWaited: {
		database: Constants.TEST_VAR_TYPES.STRING,
		number: Constants.TEST_VAR_TYPES.INTEGER
	},
	messageWhenExecuted: "Migration down puis up effectuée",
	description: "Effectue une migration down de la base de données puis up à nouveau",
	commandTestShouldReply: true,
	execute: null // Defined later
};

function getDatabaseFromName(databaseName: string): LogsDatabase | GameDatabase {
	if (databaseName === "logs") {
		return draftBotInstance.logsDatabase;
	}
	else if (databaseName === "game") {
		return draftBotInstance.gameDatabase;
	}
	throw new Error(`Unknown database name "${databaseName}"`);
}

/**
 * Force a topweek end event
 * @return {String} - The successful message formatted
 */
async function migrationTestCommand(language: string, interaction: CommandInteraction, args: string[]): Promise<string> {
	if (interaction.user.id !== botConfig.BOT_OWNER_ID) {
		throw new Error("You must be the bot owner to perform this action");
	}
	const migrationNumber = parseInt(args[1], 10);

	const database = getDatabaseFromName(args[0]);

	const maxMigration = (await database.umzug.executed()).length;
	if (migrationNumber <= 0 || migrationNumber > maxMigration) {
		throw new Error(`Migration number must be between 1 and ${maxMigration}`);
	}

	await database.umzug.down({step: maxMigration - migrationNumber + 1});
	await database.umzug.up();

	return commandInfo.messageWhenExecuted;
}

commandInfo.execute = migrationTestCommand;