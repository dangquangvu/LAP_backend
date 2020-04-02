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
  description: {
    type: String,
    default: "",
    trim: true
  },
  roles: {
    type: String,
    enum: ["all_user", "only"]
  },
  author: {
    type: Schema.ObjectId,
    ref: "Author"
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});
CardFolderSchema.index({ title: 1 }, { background: true });

module.exports = mongoose.model("Cardfolder", CardFolderSchema);
