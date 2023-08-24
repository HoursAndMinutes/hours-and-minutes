const router = require("express").Router();

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

router.get('/', async (req, res) => { 
    try {
        const results = await prisma.watches.findMany()
        res.send(results); 
    } catch (err) {
        res.send(err);
    }
    
});

router.get('/:id', async (req, res) => {
    try {
        const results = await prisma.watches.findUnique({
            where: {
                id: Number(req.params.id)
            }
        });
        res.send(results)
    } catch (err) {
        res.send(err);
    }
})

module.exports = router;
