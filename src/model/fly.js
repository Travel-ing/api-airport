const mongoose = require("mongoose");
const { PlaneSchema } = require("plane");
const { Schema } = mongoose;

const FlySchema = new Schema({
  plane: PlaneSchema,
  place: Number,
  start: AirportFly,
  finish: AirportFly,
});

const FlyModel = mongoose.model("fly", FlySchema);

module.exports = { FlyModel, FlySchema };
