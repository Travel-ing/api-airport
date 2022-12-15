const mongoose = require("mongoose");
const { Schema } = mongoose;

const AirportFlySchema = new Schema({
  title: String, // String is shorthand for {type: String}
});

const AirportFlyModel = mongoose.model("airportFly", AirportFlySchema);

module.exports = { AirportFlyModel, AirportFlySchema };
