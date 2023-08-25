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
            admin: true
        }
    });

    const user2 = await prisma.user.create({
        data: {
            firstname: "user2firstname",
            lastname: "user2lastname",
            email: "user2@gmail.com",
            password: await bcrypt.hash("password2",10),
            admin: true
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

    const watch1 = await prisma.watches.create({
        data: {
            name: "Submarine Aqua",
            brand: "Rolex",
            price: 9999,
            quantity: 36,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            color: "Aqua Blue",
            material: "Chromalight",
            mech: true,
            gender: "Male"
        }
    });
    const watch2 = await prisma.watches.create({
        data: {
            name: "Sunny Hell",
            brand: "Rolex",
            price: 6666,
            quantity: 66,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            color: "Red",
            material: "Chromalight",
            mech: true,
            gender: "Female"
        }
    });
    const watch3 = await prisma.watches.create({
        data: {
            name: "Submarine Teal",
            brand: "Rolex",
            price: 3333,
            quantity: 3,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            color: "Teal",
            material: "Steel",
            mech: true,
            gender: "Male"
        }
    });
    const watch4 = await prisma.watches.create({
        data: {
            name: "Bright Yellow",
            brand: "Rolex",
            price: 1111,
            quantity: 2,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            color: "Yellow",
            material: "Platinum",
            digital: true,
            gender: "Female"
        }
    });
    const watch5 = await prisma.watches.create({
        data: {
            name: "Splash",
            brand: "Rolex",
            price: 5555,
            quantity: 5,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            color: "Dark Blue",
            material: "Chromalight",
            digital: true,
            gender: "Male"
        }
    });

    await prisma.cart.create({
        data: {
            user_id: user1.id,
            watch_id: watch1.id
        }
    })

    await prisma.cart.create({
        data: {
            user_id: user1.id,
            watch_id: watch2.id
        }
    })

    await prisma.cart.create({
        data: {
            user_id: user1.id,
            watch_id: watch3.id
        }
    })

    await prisma.cart.create({
        data: {
            user_id: user2.id,
            watch_id: watch4.id
        }
    })

    await prisma.cart.create({
        data: {
            user_id: user4.id,
            watch_id: watch2.id
        }
    })


}

main()