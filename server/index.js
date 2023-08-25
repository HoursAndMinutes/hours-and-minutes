const express = require("express");
const path = require("path");
const app = express();
const PORT = 3009;
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

app.use(require("body-parser").json());
app.use(require("morgan")("dev"));

app.use((req, res, next) => {
  const auth = req.headers.authorization;
  const token = auth?.startsWith("Bearer ") ? auth.slice(7) : null;
  try {
    const { id } = jwt.verify(token, process.env.JWT);
    req.userId = id;
  } catch {
    req.userId = null;
  }

  next();
});

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

