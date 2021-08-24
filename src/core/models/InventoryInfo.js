const moment = require("moment");

/**
 * @typedef {import('sequelize').Sequelize} Sequelize
 * @typedef {import('sequelize/types')} DataTypes
 *
 * @param {Sequelize} Sequelize
 * @param {DataTypes} DataTypes
 * @returns
 */
module.exports = (Sequelize, DataTypes) => {
	const InventoryInfo = Sequelize.define(
		"InventoryInfo",
		{
			playerId: {
				type: DataTypes.INTEGER,
				primaryKey: true
			},
			lastDailyAt: {
				type: DataTypes.DATE,
				defaultValue: moment().format("YYYY-MM-DD HH:mm:ss")
			},
			weaponSlots: {
				type: DataTypes.INTEGER
			},
			armorSlots: {
				type: DataTypes.INTEGER
			},
			potionSlots: {
				type: DataTypes.INTEGER
			},
			objectSlots: {
				type: DataTypes.INTEGER
			},
			updatedAt: {
				type: DataTypes.DATE,
				defaultValue: moment().format("YYYY-MM-DD HH:mm:ss")
			},
			createdAt: {
				type: DataTypes.DATE,
				defaultValue: moment().format("YYYY-MM-DD HH:mm:ss")
			}
		},
		{
			tableName: "inventory_info",
			freezeTableName: true
		}
	);

	return InventoryInfo;
};
