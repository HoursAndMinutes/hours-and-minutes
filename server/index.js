const express = require("express");

const app = express();
const PORT = 3009;

app.get(`/`, (req, res) => {
  console.log(req);
  res.send(`<h1> Hours and Minutes </h1> `);
});

app.listen(PORT, (err) => {
  if (!err) {
    console.log(`Server is listening and running on port ${PORT}`);
  } else {
    console.log(`Something went wrong`);
  }
});
