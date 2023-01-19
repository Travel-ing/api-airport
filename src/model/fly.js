const mongoose = require("mongoose");
const { Schema } = mongoose;

const FlySchema = new Schema({
  plane: { type: Schema.Types.ObjectId, ref: "plane", required: true },
  passenger: {
    type: Number,
    required: true,
  },
  start: {
    airport: {
      type: Schema.Types.ObjectId,
      ref: "airport",
      required: true,
    },
    delay: {
      type: Number,
      required: true,
      default: 0,
    },
    date: {
      type: Date,
      required: true,
      default: 0,
    },
  },
  finish: {
    airport: {
      type: Schema.Types.ObjectId,
      ref: "airport",
      required: true,
    },
    delay: {
      type: Number,
      required: true,
      default: 0,
    },
    date: {
      type: Date,
      required: true,
      default: 0,
    },
  },
});

const FlyModel = mongoose.model("fly", FlySchema);

module.exports = { FlyModel, FlySchema };
