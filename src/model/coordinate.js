const mongoose = require("mongoose");
const { Schema } = mongoose;

const CoordinateSchema = new Schema({
  latitude: Number,
  longitude: Number,
});

const CoordinateModel = mongoose.model("coordinate", CoordinateSchema);

module.exports = { CoordinateModel, CoordinateSchema };
