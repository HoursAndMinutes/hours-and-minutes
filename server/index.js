const express = require("express");
const path = require("path");
const app = express();
const PORT = 3009;
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

app.use(require("body-parser").json());
app.use(require("morgan")("dev"));

app.use( async (req, res, next) => {
  const auth = req.headers.authorization;
  const token = auth?.startsWith("Bearer ") ? auth.slice(7) : null;
  try {
    const { id, admin } = jwt.verify(token, process.env.JWT);
    req.userId = id;
    req.admin = admin;
  } catch {
    req.userId = null;
  }

  next();
});

app.get(`/`, (req, res) => {
  res.sendFile(path.join(__dirname, "..", "client/dist/index.html"));
});

app.use(express.static(path.join(__dirname, "..", "client/dist")));

app.use(`/api`, require(`./api`));

app.use('/auth', require('./auth'));

app.listen(PORT, (err) => {
  if (!err) {
    console.log(`Server is listening and running on port ${PORT}`);
  } else {
    console.log(`Something went wrong`);
  }
});

