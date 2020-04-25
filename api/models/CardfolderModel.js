const { CardFolderSchema } = require("../schema");
//= require('../schemas/index');

module.exports = {
    count: function(where) {
        return new Promise((resolve) => {
            CardFolderSchema.countDocuments(where).exec((err, result) => {
                if (err) {
                    return resolve(0);
                }
                return resolve(result);
            });
        });
    },
    createCardFolder: async function(where) {
        let card_folder = new CardFolderSchema(where);
        let data = await card_folder.save();
        if (!data) throw new Error("something bad happened");
        return data;
    },

    findByAuthor: function(where) {
        return new Promise((resolve, reject) => {
            CardFolderSchema.find({ author_id: where }).exec((err, result) => {
                if (err) {
                    return reject(err);
                }
                return resolve(result);
            });
        });
    },
    findById: function(where) {
        return new Promise((resolve, reject) => {
            CardFolderSchema.find({ _id: where }).exec((err, result) => {
                if (err) {
                    return reject(err);
                }
                return resolve(result);
            });
        });
    },
    // //,{"title":1,_id:0}
    findAll: () => {
        return new Promise((resolve, reject) => {
            CardFolderSchema.find({}).exec((err, result) => {
                if (err) {
                    return reject(err);
                }
                return resolve(result);
            });
        });
    },
};