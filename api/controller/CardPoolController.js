const CardPoolModel = require("../models/CardPoolModel");

module.exports = {
    createCardPool: async(card) => {
        console.log(card);
        try {
            let cardPool = await CardPoolModel.createCardPool(card);
        } catch (error) {
            console.log(error)
        }

    },
    findCardFolderByName: async(req, res) => {

    }
};