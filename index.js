const express = require("express");
const cors = require("cors");
const app = express();
const configureDB = require("./config/dataBase");
const router = require("./config/routes");
const port = 3010;
app.use(cors());
configureDB();
app.use(express.json());
app.use("/", router);

app.listen(port, () => {
  console.log("port is running on the port  on", port);
});
