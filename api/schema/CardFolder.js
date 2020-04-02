const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var CardFolderSchema = new Schema({
  title: {
    type: String,
    require: true,
    trim: true
  },
  total: {
    type: Number,
    default: 0
  },
  author: {
    type: Schema.ObjectId,
    ref: "Author"
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});
CardFolderSchema.index({ author: 1 }, { background: true });
CardFolderSchema.index({ title: 1 }, { background: true });

module.exports = mongoose.model("CardfolderSchema", CardFolderSchema);
