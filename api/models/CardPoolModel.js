const { CardPoolSchema } = require('../schema');

module.exports = {
    count: function(where) {
        return new Promise(resolve => {
            CardPoolSchema.countDocuments(where).exec((err, result) => {
                if (err) {
                    return resolve(0);
                }
                return resolve(result);
            });
        });
    },
    createCardPool: async function(where) {
        let card_pool = new CardPoolSchema(where);
        let data = await card_pool.save();
        if (!data) throw new Error("something bad happened");
        return data;
    },

    findById: function(where) {
        return new Promise((resolve, reject) => {
            CardPoolSchema.findOne({ cardFolderId: where }).exec((err, result) => {
                if (err) {
                    return reject(err);
                }
                return resolve(result);
            });
        });
    },
    // //,{"title":1,_id:0}
    //, { password: 0, friend: 0, created: 0, updated: 0, __v: 0, role: 0 }
    findAll: (where) => {
        return new Promise((resolve, reject) => {
            CardPoolSchema.find({
                cardFolderId: where
            }).exec((err, result) => {
                if (err) {
                    return reject(err);
                }
                return resolve(result);
            });
        });
    },
    random(max, min) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    deleteMany: function (id) {
        return new Promise((resolve, reject) => {
            CardPoolSchema.deleteMany({ cardFolderId: id }, function (err) {
                if (err) {
                    return reject(err);
                }
                return resolve(true);
            });
        });
    },
};