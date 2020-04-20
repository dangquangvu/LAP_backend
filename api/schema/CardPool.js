const mongoose = require('mongoose'),
    const Schema = mongoose.Schema;
const CardSchema = new Schema({
    text: {
        type: String,
        require: true,
        trim: true
    },
    explane: {
        type: string,
        require: true,
        trim: true
    },
    author: {
        type: Schema.ObjectId,
        ref: "Author"
    },
    cardFoldId: {
        type: Schema.ObjectId,
        ref: "CardFolderSchema"
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }

}, { usePushEach: true });
CardSchema.index({ email: 1 }, { background: true });

module.exports = mongoose.model("CardPoolSchema", CardSchema);