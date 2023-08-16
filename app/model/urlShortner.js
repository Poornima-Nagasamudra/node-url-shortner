const mongoose = require("mongoose");
const sh = require("shorthash");

const Schema = mongoose.Schema;

const urlShortnerSchema = new Schema({
  title: {
    type: String,
    required: [true, " title is required"],
  },
  originalurl: {
    type: String,
    required: [true, " original is required"],
  },
  hashedurl: {
    type: String,
    //required: [true, " hashedurl is required"],
  },
  date: {
    type: String,
    default: Date.now(),
  },
})

urlShortnerSchema.pre("save", function (next) {
  this.hashedurl = sh.unique(this.originalurl)
  next()
})

const UrlShortner = mongoose.model("UrlShortner", urlShortnerSchema)

module.exports = UrlShortner
