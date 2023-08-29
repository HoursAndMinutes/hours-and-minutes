const router = require("express").Router();

const { requireAdmin } = require("./utils");

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

router.get('/', async (req, res) => { 
    try {
        res.send('<h1>here is the admin page</h1>'); 
    } catch (err) {
        res.send(err);
    }
});


//Add a Watch
router.post('/addwatch', requireAdmin, async (req, res) => {
    try {
        const watch = await prisma.watches.create({
                data: req.body
        })
        if (watch) {
            res.send(watch);
        } else {
            res.send({ error: "Could not add new watch" });
        }
    } catch (error) {
        res.send(error);
    }
})

//Edit a Watch Details
router.put('/updatewatch/:id', requireAdmin, async (req, res) => {
    try {
        const watch = await prisma.watches.update({
            where: {
                id: Number(req.params.id)
            },
            data: req.body
        })
        if (watch) {
            res.send(watch);
        } else {
            res.send({ error: "Could not update watch" });
        }
    } catch (error) {
        res.send(error);
    }
})

//Delete a Watch
router.delete('/deletewatch/:id', requireAdmin, async (req, res) => {
    try {
        const watch = await prisma.watches.delete({
            where: {
                id: Number(req.params.id)
            }
        })
        if (watch) {
            res.send(watch);
        } else {
            res.send({ error: "Could not update watch" });
        }
    } catch (error) {
        res.send(error);
    }
})


//Update a User
router.put('/updateuser/:id', requireAdmin, async (req, res) => {
    try {
        const updatedUser = await prisma.user.update({
            data: req.body
        })
        if (updatedUser) {
            res.send(updatedUser);
        } else {
            res.send({ error: "Admin could not update the User" });
        }
    } catch (error) {
        res.send({error: error.message});
    }
})

//Delete a User
router.delete('/deleteuser/:id', async (req, res) => {
    try {
        const deletedUser = await prisma.user.delete({
            where: {
                id: Number(req.params.id)
            }
        })
        if (deletedUser) {
            res.send(deletedUser);
        } else {
            res.send({ error: "Could not delete the user" });
        }
    } catch (error) {
        res.send({error: error.message});
    }
})

module.exports = router;