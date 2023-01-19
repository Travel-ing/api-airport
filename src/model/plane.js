const mongoose = require("mongoose");
const { Schema } = mongoose;

const PlaneSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  maxPlace: {
    type: Number,
    required: true,
  },
  size: {
    type: Number,
    required: true,
  },
  emptyWeight: {
    type: Number,
    required: true,
  },
  maxWeight: {
    type: Number,
    required: true,
  },
});

const PlaneModel = mongoose.model("plane", PlaneSchema);

module.exports = { PlaneModel, PlaneSchema };
