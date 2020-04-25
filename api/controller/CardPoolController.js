const { CardPoolModel } = require("../models");

module.exports = {
    createCardPool: async(card) => {
        console.log(card);
        try {
            let cardPool = await CardPoolModel.createCardPool(card);
        } catch (error) {
            console.log(error);
        }
    },
    findAllCardPool: async(req, res) => {
        console.log(req.params.id);
        let data = await CardPoolModel.findAll(req.params.id);
        if (data) {
            return res.status(200).json({
                message: data,
            });
        }
        return res.status(404).json({
            message: "error!",
        });
    },

};