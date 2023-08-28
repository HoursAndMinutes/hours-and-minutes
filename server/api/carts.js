const router = require('express').Router();

router.get('/', async (req, res) => {
  try {
      const results = await prisma.cart.findMany({
          where: {
              user_id: Number(req.params.id)
          }
      });
      if (results) {
          res.send(results)
      } else {
          res.send({ message: "Cart not found" })
      }
  } catch (error) {
      res.send({ error: "Bad pathing you silly geese" })
      console.log(req.params)
  }
})

module.exports = router;