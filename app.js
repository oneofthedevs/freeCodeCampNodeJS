import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ message: "hrllo there" });
});

app.listen(8080, () => {
  console.log("listening to port 8080");
});
