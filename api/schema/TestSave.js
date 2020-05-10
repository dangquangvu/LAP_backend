const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const TestSchema = new Schema({
    title: {
        type: String,
        require: true,
        trim: true,
    },
    about_time: {
        type: Number,
        default: 45,
    },
    arrTest: {
        type: Array,
        default: [],
    },
    score: {
        type: Number,
        default: 0,
    },
    guestTestId: {
        type: Schema.ObjectId,
        ref: "Author",
    },
    guestTest: {
        type: String,
        trim: true,
        require: true,
    },

    authorId: {
        type: Schema.ObjectId,
        ref: "Author",
    },
    author: {
        type: String,
        required: true,
        trim: true,
    },
    cardFolderId: {
        type: Schema.ObjectId,
        ref: "CardFolderSchema",
    },
    complete: {
        type: String,
        enum: [true, false],
        default: false,
    },
    breaktime: { type: Date },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
}, { usePushEach: true });
TestSchema.index({ title: 1 }, { background: true });
TestSchema.index({ authorId: 1 }, { background: true });
TestSchema.index({ guestTestId: 1 }, { background: true });

module.exports = mongoose.model("TestSchema", TestSchema);