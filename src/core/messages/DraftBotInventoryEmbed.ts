import {DraftBotReactionMessage} from "./DraftBotReactionMessage";
import {DraftBotReaction} from "./DraftBotReaction";
import {Constants} from "../Constants";
import {TranslationModule, Translations} from "../Translations";
import {EmbedField, User} from "discord.js";
import {format} from "../utils/StringFormatter";

class DraftBotInventoryEmbed extends DraftBotReactionMessage {
	mainTitle: string;

	mainFields: EmbedField[];

	mainFooter: string;

	stockTitle = "TODO";

	stockFields: EmbedField[] = [
		{
			name: "TODO",
			value: "TODO",
			inline: false
		}
	];

	stockFooter = "TODO";

	isMainState = true;

	constructor(pseudo: string, user: User, language: string, weapons: any, armors: any, potions: any, objects: any, inventoryInfo: any) {
		super(
			[
				new DraftBotReaction(
					Constants.REACTIONS.INVENTORY_RESERVE,
					DraftBotInventoryEmbed.reactionCallback,
					DraftBotInventoryEmbed.reactionCallback
				)
			],
			[user.id],
			null,
			0,
			false,
			0
		);
		const trInventory = Translations.getModule("commands.inventory", language);
		this.mainTitle = trInventory.format("title", { pseudo });
		this.mainFields = [
			weapons.filter((item: { slot: number; }) => item.slot === 0)[0].toFieldObject(language),
			armors.filter((item: { slot: number; }) => item.slot === 0)[0].toFieldObject(language),
			potions.filter((item: { slot: number; }) => item.slot === 0)[0].toFieldObject(language),
			objects.filter((item: { slot: number; }) => item.slot === 0)[0].toFieldObject(language)
		];
		this.mainFooter = trInventory.format("clickStock", { emote: Constants.REACTIONS.INVENTORY_RESERVE });
		this.stockTitle = trInventory.format("stockTitle", { pseudo });
		this.stockFooter = trInventory.format("clickMainInventory", { emote: Constants.REACTIONS.INVENTORY_RESERVE });
		this.stockFields = [
			this.createStockField(trInventory.get("weapons"), trInventory, weapons, inventoryInfo.weaponSlots),
			this.createStockField(trInventory.get("armors"), trInventory, armors, inventoryInfo.armorSlots),
			this.createStockField(trInventory.get("potions"), trInventory, potions, inventoryInfo.potionSlots),
			this.createStockField(trInventory.get("objects"), trInventory, objects, inventoryInfo.objectSlots)
		];
		this.setTitle(this.mainTitle);
		this.addFields(this.mainFields);
		this.setFooter(this.mainFooter);
	}

	createStockField = function(title: string, tr: TranslationModule, items: any[], slots: number): EmbedField {
		const formattedTitle = format(title, {
			count: items.length - 1,
			max: slots - 1
		});
		if (slots <= 1) {
			return {
				name: formattedTitle,
				value: tr.get("noSlot"),
				inline: false
			};
		}
		let value = "";
		for (let i = 1; i < slots; ++i) {
			const search = items.filter(item => item.slot === i);
			if (search.length === 0) {
				value += tr.get("emptySlot");
			}
			else {
				value += search[0].toFieldObject(tr.language).value;
			}
			value += "\n";
		}
		return {
			name: formattedTitle,
			value,
			inline: false
		};
	}

	static reactionCallback = async function(msg: DraftBotReactionMessage): Promise<void> {
		const invMsg: DraftBotInventoryEmbed = msg as DraftBotInventoryEmbed;
		if (invMsg.isMainState) {
			invMsg.setTitle(invMsg.stockTitle);
			invMsg.fields = invMsg.stockFields;
			invMsg.setFooter(invMsg.stockFooter);
		}
		else {
			invMsg.setTitle(invMsg.mainTitle);
			invMsg.fields = invMsg.mainFields;
			invMsg.setFooter(invMsg.mainFooter);
		}
		invMsg.isMainState = !invMsg.isMainState;
		await msg.sentMessage.edit(invMsg);
	}
}

export class DraftBotInventoryEmbedBuilder {
	private readonly _user: User;

	private readonly _language: string;

	private readonly _player: any;

	constructor(user: User, language: string, player: any) {
		this._user = user;
		this._language = language;
		this._player = player;
	}

	async build(): Promise<DraftBotInventoryEmbed> {
		const weapons = this._player.InventorySlots.filter((slot: { itemCategory: number; }) => slot.itemCategory === Constants.ITEM_CATEGORIES.WEAPON);
		const armors = this._player.InventorySlots.filter((slot: { itemCategory: number; }) => slot.itemCategory === Constants.ITEM_CATEGORIES.ARMOR);
		const potions = this._player.InventorySlots.filter((slot: { itemCategory: number; }) => slot.itemCategory === Constants.ITEM_CATEGORIES.POTION);
		const objects = this._player.InventorySlots.filter((slot: { itemCategory: number; }) => slot.itemCategory === Constants.ITEM_CATEGORIES.OBJECT);
		return new DraftBotInventoryEmbed(
			await this._player.getPseudo(this._language),
			this._user,
			this._language,
			await Promise.all(weapons.map(async function(item: { slot: number; getItem: () => any; }) {
				const newItem = await item.getItem();
				newItem.slot = item.slot;
				return newItem;
			})),
			await Promise.all(armors.map(async function(item: { slot: number; getItem: () => any; }) {
				const newItem = await item.getItem();
				newItem.slot = item.slot;
				return newItem;
			})),
			await Promise.all(potions.map(async function(item: { slot: number; getItem: () => any; }) {
				const newItem = await item.getItem();
				newItem.slot = item.slot;
				return newItem;
			})),
			await Promise.all(objects.map(async function(item: { slot: number; getItem: () => any; }) {
				const newItem = await item.getItem();
				newItem.slot = item.slot;
				return newItem;
			})),
			this._player.InventoryInfo
		);
	}
}