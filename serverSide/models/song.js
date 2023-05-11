import mongoose from "mongoose";

const songSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  poster: {
    type: String,
    required: true,
  },
  artist: {
    type: String,
    required: true,
  },
  releaseDate: {
    type: Number,
    required: true,
  },
  artistImg: {
    type: String,
    required: true,
  },
  playCount: {
    type: Number,
    required: true,
  },
});

const Song = mongoose.model("Song", songSchema);
export default Song;
