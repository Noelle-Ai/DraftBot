class Maps {

	/**
	 * Returns the map ids a player can go to. It excludes the map the player is coming from if at least one map is available
	 * @param {Players} player
	 * @param {string|String} restrictedMapType
	 * @returns {Number[]}
	 */
	static async getNextPlayerAvailableMaps(player, restrictedMapType) {
		let map;
		if (!player.mapId) {
			map = await MapLocations.getRandomMap();
			player.previousMapId = map.id;
			player.mapId = map.id;
		}
		else {
			map = await MapLocations.getById(player.mapId);
		}
		const nextMaps = [];

		const nextMapIds = await MapLocations.getMapConnected(map.id, player.previousMapId, restrictedMapType);
		for (const m of nextMapIds) {
			nextMaps.push(m.id);
		}

		if (nextMaps.length === 0 && player.previousMapId) {
			nextMaps.push(player.previousMapId);
		}
		return nextMaps;
	}

	/**
	 * Get if the player is currently travelling between 2 maps
	 * @param {Players} player
	 * @returns {boolean}
	 */
	static isTravelling(player) {
		return player.startTravelDate.getTime() !== 0;
	}

	/**
	 * Get the time in ms the player is travelling
	 * @param {Players} player
	 * @returns {number}
	 */
	static getTravellingTime(player) {
		if (!this.isTravelling(player)) {
			return 0;
		}
		const malus = player.currentEffectFinished() ? 0 : Date.now() - player.effectEndDate.getTime();
		return Date.now() - player.startTravelDate - malus;
	}


	static async applyEffect(player, effect, time = 0) {
		await this.removeEffect(player);
		player.effect = effect;
		if (effect === EFFECT.OCCUPIED) {
			player.effectDuration = time;
		}
		else {
			player.effectDuration = millisecondsToMinutes(JsonReader.models.players.effectMalus[effect]);
		}
		player.effectEndDate = new Date(Date.now() + minutesToMilliseconds(player.effectDuration));
		player.startTravelDate = new Date(player.startTravelDate.getTime() + minutesToMilliseconds(player.effectDuration));
		await player.save();
	}

	static async removeEffect(player) {
		const remainingTime = player.effectRemainingTime();
		player.effect = EFFECT.SMILEY;
		player.effectDuration = 0;
		player.effectEndDate = new Date();
		if (remainingTime > 0) {
			this.advanceTime(player, millisecondsToMinutes(remainingTime));
		}
		await player.save();
	}

	static advanceTime(player, time) {
		const t = minutesToMilliseconds(time);
		if (player.effectRemainingTime() !== 0) {
			if (t >= player.effectEndDate.getTime() - Date.now()) {
				player.effectEndDate = Date.now();
			}
			else {
				player.effectEndDate = new Date(player.effectEndDate.getTime() - t);
			}
		}
		player.startTravelDate = new Date(player.startTravelDate.getTime() - t);
	}

	/**
	 * Make a player start travelling. It does not check if the player currently travelling, if the maps are connected etc. It also saves the player
	 * @param {Players} player
	 * @param {number} mapId
	 * @param {number} time - The start time
	 * @returns {Promise<void>}
	 */
	static async startTravel(player, mapId, time) {
		player.previousMapId = player.mapId;
		player.mapId = mapId;
		player.startTravelDate = new Date(time + minutesToMilliseconds(player.effectDuration));
		await player.save();
		if (player.effect !== EFFECT.SMILEY) {
			await Maps.applyEffect(player, player.effect, player.effectDuration);
		}
	}

	/**
	 * Make a player stop travelling. It saves the player
	 * @param {Players} player
	 * @returns {Promise<void>}
	 */
	static async stopTravel(player) {
		player.startTravelDate = new Date(0);
		await player.save();
	}

	/**
	 * The number of squares between small events in the travel path string
	 * @type {number}
	 */
	static PATH_SQUARE_COUNT = 4;

	/**
	 * Generates a string representing the player walking form a map to another
	 * @param {Players} player
	 * @param {"fr"|"en"} language
	 * @param {string|String} effect
	 * @returns {Promise<string>}
	 */
	static async generateTravelPathString(player, language, effect = null) {
		const prevMapInstance = await MapLocations.getById(player.previousMapId);
		const nextMapInstance = await MapLocations.getById(player.mapId);
		const time = effect !== null ? player.effectEndDate.getTime() - player.startTravelDate : this.getTravellingTime(player);
		let percentage = time / (2 * 60 * 60 * 1000);
		if (percentage > 1) {
			percentage = 1;
		}
		let index = 0;
		const percentageSpan = 1 / (REPORT.SMALL_EVENTS_COUNT + 1);
		for (let i = 0; i < REPORT.SMALL_EVENTS_COUNT + 1; ++i) {
			if (percentage <= (i + 1) * percentageSpan) {
				index = i * (this.PATH_SQUARE_COUNT + 1) + this.PATH_SQUARE_COUNT * (percentage - i * percentageSpan) / percentageSpan;
				break;
			}
		}
		index = Math.floor(index);
		let str = prevMapInstance.getEmote(language) + " ";
		for (let i = 0; i < REPORT.SMALL_EVENTS_COUNT + 1; ++i) {
			for (let j = 0; j < this.PATH_SQUARE_COUNT; ++j) {
				if (i * (this.PATH_SQUARE_COUNT + 1) + j === index) {
					if (effect === null) {
						str += "🧍";
					}
					else {
						str += EFFECT.EMOJIS[effect];
					}
				}
				else {
					str += "■";
				}
			}
		}
		return str + " " + nextMapInstance.getEmote(language);
	}
}

module.exports = Maps;