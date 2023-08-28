const router = require("express").Router();
const { requireUser } = require('./utils.js');

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

router.use("/admin", require("./admin.js"));

router.use("/carts", require("./carts.js"));

router.get('/', async (req, res) => { 
    try {
        const results = await prisma.user.findMany();
        res.send(results); 
    } catch (err) {
        res.send(err);
    }
    
});

router.get('/:id', async (req, res) => {
    try {
        const results = await prisma.user.findUnique({
            where: {
                id: Number(req.params.id)
            }
        });
        if (results) {
            res.send(results)
        } else {
            res.send({error: "Could not find user"})
        }
    } catch (err) {
        res.send(err);
    }
});

router.put('/:id', requireUser, async (req, res) => {
    try {
        const user = await prisma.user.findUnique({
            where: {
                id: Number(req.params.id)
            },
            body: req.body
        })
        if (user) {
            res.send(user);
        } else {
            res.send({ error: "Error finding user" });
        }
    } catch (error) {
        res.send(error);
    }
})


router.get('/:id/cart', async (req, res) => {
    try {
        const results = await prisma.cart.findMany({
            where: {
                user_id: Number(req.params.id)
                //req.params.id -> separate by / index 3
            }
        });
        if (results) {
            res.send(results)
        } else {
            res.send({ message: "Cart not found" })
        }
    } catch (error) {
        res.send({ error: "Bad pathing you silly geese" })
    }
});

module.exports = router;