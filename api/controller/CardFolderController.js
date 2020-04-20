const CardfolderModel = require("../models/CardfolderModel");
const CardPoolModel = require("../models/CardPoolModel");

module.exports = {
    createCardFolder: async(req, res) => {
        console.log(req.body);
        if (!req.body.title)
            return res.status(404).json({ message: "field not blank!" });
        let cardFolder = await CardfolderModel.createCardFolder(req.body);
        console.log(cardFolder)
        let promises = [];
        req.body.arrayCard.map((item) => {
            item.author = req.body.author;
            item.cardFoldId = cardFolder._id;
            promises.push(CardPoolModel.createCardPool(item));
        });
        Promise.all(promises).then((response) => console.log(response));
        if (cardFolder) {
            return res.status(200).json({
                message: "card has been created!",
            });
        }
        return res.status(404).json({
            message: "create card folder not success!",
        });
    },
    findCardFolderByName: async(req, res) => {},
};