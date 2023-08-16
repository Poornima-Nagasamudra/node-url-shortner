const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const configureDB = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/mongobasic")
    .then((res) => {
      console.log("data base is connected");
    })
    .catch((err) => {
      console.log("Errror connected to db", err);
    });
};
module.exports = configureDB;
