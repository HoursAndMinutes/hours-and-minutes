const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const bcrypt = require('bcryptjs')


const main = async() => {

    const user1 = await prisma.user.create({
        data: {
            firstname: "user1firstname",
            lastname: "user1lastname",
            email: "user1@gmail.com",
            password: await bcrypt.hash("password1",10),
        }
    });

    const user2 = await prisma.user.create({
        data: {
            firstname: "user2firstname",
            lastname: "user2lastname",
            email: "user2@gmail.com",
            password: await bcrypt.hash("password2",10),
        }
    });

    const user3 = await prisma.user.create({
        data: {
            firstname: "user1firstname",
            lastname: "user1lastname",
            email: "user1test@gmail.com",
            password: await bcrypt.hash("password3",10),
        }
    });

    const user4 = await prisma.user.create({
        data: {
            firstname: "user4firstname",
            lastname: "user4lastname",
            email: "user4test@gmail.com",
            password: await bcrypt.hash("password4",10),
        }
    });

    const user5 = await prisma.user.create({
        data: {
            firstname: "user5firstname",
            lastname: "user5lastname",
            email: "user5test@gmail.com",
            password: await bcrypt.hash("password5",10),
        }
    });

    const watch1 = await prisma.user.create({
        data: {
            firstname: "user5firstname",
            lastname: "user5lastname",
            email: "user5test@gmail.com",
            password: await bcrypt.hash("password5",10),
        }
    });

}

main()