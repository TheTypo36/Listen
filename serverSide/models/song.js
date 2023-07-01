import mongoose from "mongoose";

const songSchema = mongoose.Schema({
  songName: {
    type: String,
    required: true,
  },
  artistName: {
    type: String,
    required: true,
  },
  songUrl: {
    type: String,
    required: true,
  },
  posterUrl: {
    type: String,
    required: true,
  },
  artistImgUrl: {
    type: String,
    required: true,
  },
  songLabel: {
    type: String,
    required: true,
  },
  // playCount: {
  //   type: Number,
  //   required: true,
  // },
});

const Song = mongoose.model("Song", songSchema);
export default Song;
