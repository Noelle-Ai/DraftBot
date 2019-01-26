const Equipement = require('./Equipement');
const ItemNames = require('../utils/items/Francais');
const ItemValues = require('../utils/items/Values');
const Text = require('../text/Francais');
const DefaultValues = require('../utils/DefaultValues');

class EquipementManager {


    /**
     * Return an object matching with the piece of equipement that own a specific id
     * @param id - The id of the equipement that has to be loaded
     * @returns {*} - An equipement
     */
    getWeaponById(id) {
        return new Equipement(id, ItemValues.weapon[id].rareness, ItemValues.weapon[id].power);
    }


    /**
     * Return an object matching with the piece of equipement that own a specific id
     * @param id - The id of the equipement that has to be loaded
     * @returns {*} - An equipement
     */
    getArmorById(id) {
        return new Equipement(id, ItemValues.armor[id].rareness, ItemValues.armor[id].power);
    }


    /**
     * Return string containing a description of an equipement wich is a weapon
     * @param equipement - The equipement that has to be displayed
     * @returns {String} - The description of the equipement
     */
    displayWeapon(equipement) {
        return ItemNames.weapon[equipement.id] + Text.equipementManager.separator1 + this.getEquipementEfficiency(equipement) + Text.equipementManager.separator2
            + Text.rarities[equipement.rareness];
    }


    /**
     * Return string containing a description of an equipement wich is a weapon
     * @param equipement - The equipement that has to be displayed
     * @returns {String} - The description of the equipement
     */
    displayArmor(equipement) {
        return ItemNames.armor[equipement.id] + Text.equipementManager.separator1 + this.getEquipementEfficiency(equipement) + Text.equipementManager.separator2
            + Text.rarities[equipement.rareness];
    }


    /**
     * Return string containing a description of an equipement in case this equipement is the default armor
     * @param equipement - The equipement that has to be displayed
     * @returns {String} - The description of the equipement
     */
    displayDefaultArmor(equipement) {
        return ItemNames.armor[equipement.id];
    }

    /**
     * Return the real value of the power that is applied whe it is used
     * @param equipement - The equipement that has to be displayed
     * @returns {Number} - The real power of a piece of equipement
     */
    getEquipementEfficiency(equipement) {
        return ItemValues.effect[equipement.rareness][equipement.power];
    }


    /**
     * Choose a random weapon in the existing ones. (take care of the rareness)
     * @returns {*} - A random weapon
     */
    generateRandomWeapon() {
        this.generateRandomRareness();
        let id = this.generateRandomWeaponId();
        let tries = 1;
        while (ItemValues.weapon[id].rareness != desiredRareness) {
            tries++;
            id = this.generateRandomWeaponId();
        }
        console.log("Item généré ! Nombre d'essais: " + tries)
        return this.getWeaponById(id);
    }

    /**
     * Generate an id of an existing weapon totally randomly without taking care of the rareness
     * @returns {Number} - A random Id
     */
    generateRandomWeaponId() {
        return Math.round(Math.random() * (DefaultValues.raritiesGenerator.numberOfWeapon - 1)) + 1;
    }


    /**
     * Choose a random armor in the existing ones. (take care of the rareness)
     * @returns {*} - A random armor
     */
    generateRandomArmor() {
        let desiredRareness = this.generateRandomRareness();
        let id = this.generateRandomArmorId();
        let tries = 1;
        while (ItemValues.weapon[id].rareness != desiredRareness) {
            tries++;
            id = this.generateRandomArmorId();
        }
        console.log("Item généré ! Nombre d'essais: " + tries)
        return this.getArmorById(id);
    }


    /**
     * Generate an id of an existing armor totally randomly without taking care of the rareness
     * @returns {Number} - A random Id
     */
    generateRandomArmorId() {
        return Math.round(Math.random() * (DefaultValues.raritiesGenerator.numberOArmor - 1)) + 1;
    }


    /**
     * Generate a random rareness. Legendary is very rare and common is not rare at all
     * @returns {Number} - the number refering to a rareness (1 - 7) 
     */
    generateRandomRareness() {
        let randomValue = Math.round(Math.random() * DefaultValues.raritiesGenerator.maxValue);
        let desiredRareness = 1;
        while (randomValue > DefaultValues.raritiesGenerator[desiredRareness]) {
            desiredRareness++;
        }
        return desiredRareness;
    }


}

module.exports = EquipementManager;

