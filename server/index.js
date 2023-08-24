const express = require("express");
const path = require("path");
const app = express();
const PORT = 3009;
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

app.use(require("body-parser").json());
app.use(require("morgan")("dev"));

app.get(`/`, (req, res) => {
  console.log(req);
  res.send(`<h1> Hours and Minutes </h1>`);
});

app.use(`/api`, require(`./api`));

app.use('/auth', require('./auth'));

const token = 

app.listen(PORT, (err) => {
  if (!err) {
    console.log(`Server is listening and running on port ${PORT}`);
  } else {
    console.log(`Something went wrong`);
  }
});

