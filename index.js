const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));
app.get("/*", function(req, res) {
  res.sendFile(public, "index.html");
});

app.listen(port, function(req, res) {
  console.log("NoteTakingApp Server Running OK");
});
