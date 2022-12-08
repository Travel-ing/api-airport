const express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000;
require("dotenv").config();

const flyRouter = require("./routes/fly");

app.use(cors(), bodyParser.json());

app.use("/fly", flyRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
