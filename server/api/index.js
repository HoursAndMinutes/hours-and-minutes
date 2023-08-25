// const { Router } = require("express");

const router = require("express").Router();

// const app = express();

router.get('/', (req, res) => { 
    res.send("<h1>Welcome to the Hours and Minutes API Hub</h1>");
});

router.use(`/users`, require(`./users.js`));

router.use(`/watches`, require(`./watches.js`));

module.exports = router;