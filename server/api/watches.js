const router = require("express").Router();

router.get('/', (req, res) => { 
    res.send("watches");
});

module.exports = router;
