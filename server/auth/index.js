const router = require('express').Router();
const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require('bcryptjs');

router.get('/', (req, res) => {
  res.send("Authorization path");
})

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await prisma.user.findUnique({
      where: { email: email }
    });
    if (user) {
      const passwordMatch = await bcrypt.compare(password, user.password)
      if (passwordMatch) {
        const token = jwt.sign({ id: user.id, admin: user.admin }, process.env.JWT);
        res.status(201).send({ token })
      } else {
        res.send({ error: "Wrong password. Please try again." })
      }
    } else {
      res.send({ error: "User not found. Please try again" })
    }
  } catch(err) {
    res.send(err);
  }
});

router.post('/register', async (req, res) => {
  try {
    const user = req.body;
    user.password = await bcrypt.hash(user.password, 10);
    const result = await prisma.user.create({
      data: user
    });
    if (result) {
      const token = jwt.sign({ id: result.id, admin: result.admin }, process.env.JWT);
      res.status(201).send({ token });
    } else {
      res.send({ error: "Failed to create user" });
    }
  } catch (err) {
    res.send(err);
  }
});

router.get('/me', async (req, res) => {
  const auth = req.headers.authorization;

  try {
    const user = await prisma.user.findUnique({
    where: { id: req.userId},
    });

    if (user) {
      res.send(user);
    } else {
      res.send(error.message);
    }
  } catch (error) {
    res.send(error.message);
  }
});

module.exports = router;