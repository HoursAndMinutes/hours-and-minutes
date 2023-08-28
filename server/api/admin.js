const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("admin hub")
})

module.exports = router;