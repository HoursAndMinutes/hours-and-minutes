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
        if (results) {
            res.send(results)
        } else {
            res.send({error: "Could not find watch"})
        }
        
    } catch (err) {
        res.send(err);
    }
})

module.exports = router;
