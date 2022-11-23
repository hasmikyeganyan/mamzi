const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const jewellery = require("./jewellery");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/jewellery/", (req, res) => {
  res.json(jewellery);
});

app.
app.listen(7000, () => {
  console.log("Listening to 7000");
});

