const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var CardFolderSchema = new Schema({
    title: {
        type: String,
        require: true,
        trim: true
    },
    total: {
        type: Number
    },
    description: {
        type: String,
        default: "",
        trim: true
    },
    roles: {
        type: String,
        enum: ["all_user", "only"],
        default: "all_user"
    },
    author_id: {
        type: Schema.ObjectId,
        ref: "Author",
    },
    author: {
        type: String,
        required: true,
        trim: true,
    },
    author_img: {
        type: String,
        default: ''
    },
    author_email: {
        type: String,
        default: ''
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});
CardFolderSchema.index({ title: 1 }, { background: true });

module.exports = mongoose.model("CardFolderSchema", CardFolderSchema);