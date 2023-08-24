// const { Router } = require("express");

const router = require("express").Router();

// const app = express();

router.get('/', (req, res) => { 
    res.send("test");
});

router.use(`/users`, require(`./users.js`));

router.use(`/watches`, require(`./watches.js`));


module.exports = router;