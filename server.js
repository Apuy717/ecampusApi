const express = require("express");
const bodyParser = require("body-parser");
const app = express();
require("dotenv").config();
const port = process.env.PORT_APP || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const router = require("./src/routers");
app.use("/api/", router);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
