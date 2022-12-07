const express = require("express");

const app = express();
const port = 2107;

app.get("/", (req, res) => {
  res.json({
    msg: "Welcome!",
  });
});

app.get("/*", (req, res) => {
  res.json({
    msg: "Hello world!",
  });
});

app.listen(port, () => {
  console.log("listening on port " + port);
});
