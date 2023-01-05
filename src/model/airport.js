const mongoose = require("mongoose");
const { Schema } = mongoose;

const AirportSchema = new Schema({
  name: String,
  AITA: String,
  coordinate: {
    latitude: Number,
    longitude: Number,
  },
});

const AirportModel = mongoose.model("airport", AirportSchema);

module.exports = { AirportModel, AirportSchema };
