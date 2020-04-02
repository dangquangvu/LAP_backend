const CardfolderModel = require("../models/CardfolderModel");

module.exports = {
  createCardFolder: async (req, res) => {
    console.log(req.body);
    if (!req.body.title)
      return res.status(404).json({ message: "field not blank!" });
    const title = req.body.title;
    let card_folder = {
      title: title,
      author: "5e85aea6532d512e64910e0c",
      roles: "all_user",
      description: "test"
    };
    let cardFolder = await CardfolderModel.createCardFolder(card_folder);
    if (cardFolder) {
      return res.status(200).json({
        message: "create ok!"
      });
    }
    return res.status(404).json({
      message: "create card folder not success!"
    });
  },
  findCardFolderByName :async (req,res)=>{

  }
};
