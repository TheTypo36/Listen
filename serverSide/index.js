import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = 6505;
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.listen(PORT, () => {
  console.log(`server running at port ${PORT}`);
});
