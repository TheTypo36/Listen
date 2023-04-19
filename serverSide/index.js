import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import routes from "./routes/index.js";

const app = express();
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(cors());
const PORT = 6505;
const CONNECTION_URL =
  "mongodb+srv://thetypo36:36ashish@cluster0.x2imt4b.mongodb.net/test";
mongoose.connect(CONNECTION_URL, {
  useNewUrlParser: true,
});
app.use("/", routes);
mongoose.connection.on("connect", () => {
  console.log("successfull connection to mongdb");
});
mongoose.connection.on("error", (err) => {
  console.log("fail to connect to mongodb", err);
});
app.listen(PORT, () => {
  console.log(`server running at port ${PORT}`);
});
