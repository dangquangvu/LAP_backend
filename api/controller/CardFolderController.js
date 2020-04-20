const CardfolderModel = require("../models/CardfolderModel");

module.exports = {
    createCardFolder: async(req, res) => {
        console.log(req.body);
        if (!req.body.title)
            return res.status(404).json({ message: "field not blank!" });
        const title = req.body.title;
        let cardFolder = await CardfolderModel.createCardFolder(req.body);
        if (cardFolder) {
            return res.status(200).json({
                message: "card has been created!"
            });
        }
        return res.status(404).json({
            message: "create card folder not success!"
        });
    },
    findCardFolderByName: async(req, res) => {

    }
};