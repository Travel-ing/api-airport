const express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 3000;
require("dotenv").config();
mongoose.set("strictQuery", true);
require("./services/mongoClient");

const flyRouter = require("./routes/fly");
const planeRouter = require("./routes/plane");

app.use(cors(), bodyParser.json());

app.use("/fly", flyRouter);
app.use("/plane", planeRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
