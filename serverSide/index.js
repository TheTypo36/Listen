import express from "express";
import 'dotenv/config'
import path from 'path';
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import routes from "./routes/index.js";

const app = express();
const DATABASE = process.env.DATABASE;

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(cors());
const PORT = 6505;
const CONNECTION_URL = DATABASE;
  
mongoose.connect(CONNECTION_URL, {
  useNewUrlParser: true,
});
// app.use('/uploads',express.static(path.join(__dirname,'uploads')));
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
