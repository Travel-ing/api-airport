const mongoose = require("mongoose");
const { Schema } = mongoose;

const PlaneSchema = new Schema({
  name: { type: String },
  brand: { type: String },
  maxPlace: { type: Number },
  size: { type: Number },
  emptyWeight: { type: Number },
  maxWeight: { type: Number },
});

const PlaneModel = mongoose.model("plane", PlaneSchema);

module.exports = { PlaneModel, PlaneSchema };
