const router = require("express").Router();

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

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
        res.send(results)
    } catch (err) {
        res.send(err);
    }
})

module.exports = router;