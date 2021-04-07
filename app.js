import express from "express";
const app = express();
import dotenv from "dotenv";
import compression from "compression";
dotenv.config();

app.use(compression());

app.get("/", (req, res) => {
  res.status(200).json({ message: "hrllo there" });
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log("listening to port " + port);
});
