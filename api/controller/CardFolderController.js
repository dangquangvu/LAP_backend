const CardfolderModel = require("../models/CardfolderModel");
const CardPoolModel = require("../models/CardPoolModel");

module.exports = {
    createCardFolder: async(req, res) => {
        console.log(req.body);
        if (!req.body.title)
            return res.status(404).json({ message: "field not blank!" });
        let cardFolder = await CardfolderModel.createCardFolder(req.body);
        console.log(cardFolder, "lllll");
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
    findAllCardFolder: async(req, res) => {
        console.log(req.body, "nnnnnnnnnn");
        if (!req.body.author_id)
            return res.status(404).json({ message: "argument not has!" });
        let cardFolder = await CardfolderModel.findByAuthor(req.body.author_id);
        console.log(cardFolder);
        if (cardFolder) {
            return res.status(200).json({
                message: cardFolder,
            });
        }
        return res.status(404).json({
            message: "something error!",
        });
    },
    findCardFolderByName: async(req, res) => {},
    findCardFolderById: async(req, res) => {},
};