const mongoose = require("mongoose");
const { Schema } = mongoose;

const AirportSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  AITA: {
    type: String,
    required: true,
  },
  coordinate: {
    latitude: {
      type: Number,
      required: true,
    },
    longitude: {
      type: Number,
      required: true,
    },
  },
});

const AirportModel = mongoose.model("airport", AirportSchema);

module.exports = { AirportModel, AirportSchema };
