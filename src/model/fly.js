const mongoose = require("mongoose");
const { Schema } = mongoose;

const FlySchema = new Schema({
  plane: { type: Schema.Types.ObjectId, ref: "plane", required: true },
  passenger: Number,
  start: {
    airport: {
      type: Schema.Types.ObjectId,
      ref: "airport",
      required: true,
    },
    delay: { type: Number, default: 0 },
    date: Date,
  },
  finish: {
    airport: {
      type: Schema.Types.ObjectId,
      ref: "airport",
      required: true,
    },
    delay: { type: Number, default: 0 },
    date: Date,
  },
});

const FlyModel = mongoose.model("fly", FlySchema);

module.exports = { FlyModel, FlySchema };
