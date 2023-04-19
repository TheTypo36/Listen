import mongoose from "mongoose";

const songSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  artist: {
    type: String,
    required: true,
  },
});
