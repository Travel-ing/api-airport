const express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 3000;
require("dotenv").config();
mongoose.set("strictQuery", true);
require("./services/mongoClient");
const authorization = require("./middleware/authorization");
const logger = require("./middleware/logger");
const formatFly = require("./middleware/formatFly")

const flyRouter = require("./routes/fly");
const planeRouter = require("./routes/plane");
const airportRouter = require("./routes/airport");

app.use(cors(), bodyParser.json());
app.use(authorization);
app.use(logger);
app.use("/fly", formatFly, flyRouter);
app.use("/plane", planeRouter);
app.use("/airport", airportRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
