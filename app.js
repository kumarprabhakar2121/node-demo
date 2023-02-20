const express = require("express");

const app = express();
const port = 2107;

app.get("/", (req, res) => {
  res.json({
    msg: "Welcome!",
  });
});

app.get("/details", (req, res) => {
  const host = req.get("host");
  const origin = req.get("origin");
  const {
    path,
    url,
    method,
    ip,
    fresh,
    originalUrl,
    params,
    protocol,
    query,
    req_res,
    secure,
    signedCookies,
    stale,
    subdomains,
    xhr,
  } = req;

  res.json({
    host,
    origin,
    path,
    url,
    method,
    ip,
    fresh,
    originalUrl,
    params,
    protocol,
    query,
    req_res,
    secure,
    signedCookies,
    stale,
    subdomains,
    xhr,
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
