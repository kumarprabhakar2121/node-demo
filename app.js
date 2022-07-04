const express = require("express");

const app = express();
const port = 2107;

app.get("/", (req, res) => {
  res.json({
    msg: "Welcome to the wprld of AWS",
  });
});

app.get("/aws", (req, res) => {
  res.json({
    msg: "You took longer than we expected",
  });
});

app.listen(port, () => {
  console.log("listening on port " + port);
});
