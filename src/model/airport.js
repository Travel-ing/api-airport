const mongoose = require("mongoose");
const { CoordinateSchema } = require("./coordinate");
const { Schema } = mongoose;

const AirportSchema = new Schema({
  name: String,
  AITA: String,
  coordinate: CoordinateSchema,
});

const AirportModel = mongoose.model("airport", AirportSchema);

module.exports = { AirportModel, AirportSchema };
