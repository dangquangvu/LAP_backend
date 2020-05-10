const { TestSave } = require("../schema");
const { CardPoolModel } = require("../models");

module.exports = {
    count: function(where) {
        return new Promise((resolve) => {
            TestSave.countDocuments(where).exec((err, result) => {
                if (err) {
                    return resolve(0);
                }
                return resolve(result);
            });
        });
    },
    createTestQuiz: async function(where) {
        let card_pool = new TestSave(where);
        let data = await card_pool.save();
        if (!data) throw new Error("something bad happened");
        return data;
    },

    findById: function(where) {
        //  { cardFolderId, author_id, author_id } = where;
        return new Promise((resolve, reject) => {
            TestSave.findOne({ where }).exec((err, result) => {
                if (err) {
                    return reject(err);
                }
                return resolve(result);
            });
        });
    },
    findAll: (where) => {
        return new Promise((resolve, reject) => {
            TestSave.find({
                cardFolderId: where,
            }).exec((err, result) => {
                if (err) {
                    return reject(err);
                }
                return resolve(result);
            });
        });
    },
};