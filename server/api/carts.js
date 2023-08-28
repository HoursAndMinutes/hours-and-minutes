const router = require('express').Router();

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

router.post('/', async (req, res) => {
    try {
        const results = await prisma.cart.create({
            data: req.body
        });
        if (results) {
            res.send(results);
        }
    } catch (error) {
        res.send({ error: "Error adding to cart" });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const results = await prisma.cart.delete({
            where: {
                id: Number(req.params.id)
            }
        })
        console.log(results)
        if (results) {
            res.send(results);
        }
    } catch (error) {
        res.send({ error: "Error deleting cart" })
    }
});

router.delete('/:id/clear', async (req, res) => {
    try {
        const results = await prisma.cart.deleteMany({
            where: {
                user_id: Number(req.params.id)
            }
        })
        console.log(results)
        if (results) {
            res.send(results);
        }
    } catch (error) {
        res.send({ error: "Error deleting cart" })
    }
});

module.exports = router;