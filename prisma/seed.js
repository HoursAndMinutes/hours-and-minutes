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

    const user6 = await prisma.user.create({
        data: {
            firstname: "user6firstname",
            lastname: "user6lastname",
            email: "user6test@gmail.com",
            password: await bcrypt.hash("password6",10),
        }
    });

    const user7 = await prisma.user.create({
        data: {
            firstname: "user7firstname",
            lastname: "user7lastname",
            email: "user7test@gmail.com",
            password: await bcrypt.hash("password7",10),
        }
    });

    const user8 = await prisma.user.create({
        data: {
            firstname: "user8firstname",
            lastname: "user8lastname",
            email: "user8test@gmail.com",
            password: await bcrypt.hash("password8",10),
        }
    });

    const user9 = await prisma.user.create({
        data: {
            firstname: "user9firstname",
            lastname: "user9lastname",
            email: "user9test@gmail.com",
            password: await bcrypt.hash("password9",10),
        }
    });

    const user10 = await prisma.user.create({
        data: {
            firstname: "user10firstname",
            lastname: "user10lastname",
            email: "user10test@gmail.com",
            password: await bcrypt.hash("password10",10),
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
            gender: "Male",
            imageURL: "https://wristaficionado.com/cdn/shop/products/E-com_Rolex_Submariner_116613LB_pre2015_40mm_2toned_Bluedial_serial07TS5780_01_1280x.jpg?v=1662995441"
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
            gender: "Female",
            imageURL: "https://www.swissluxury.com/product_images/336935bgio.jpg"
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
            gender: "Male",
            imageURL: "https://s3.amazonaws.com/ISHOWIMAGES/rolex/watch_assets_upright/portrait_assets/m126234-0051_collection_upright_portrait.png"
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
            gender: "Female",
            imageURL: "https://smhttp-ssl-84869.nexcesscdn.net/pub/media/catalog/product/m/1/m124060-0001_collection_upright_portrait_1.png"
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
            gender: "Male",
            imageURL: "https://content.rolex.com/v7/dam/2023-06/upright-c/m126233-0039.png?impolicy=v7-majesty"
        }
    });

    const watch6 = await prisma.watches.create({
        data: {
            name: "Super Sea Wolf",
            brand: "Zodiac",
            price: 1595,
            quantity: 5,
            description: "Black Stainless Steel Super Sea Wolf Diving Watch",
            color: "Black",
            material: "Stainless Steel",
            digital: false,
            gender: "Male",
            imageURL: "https://fossil.scene7.com/is/image/FossilPartners/ZO9700_main?$zodiac_large$"
        }
    });

    const watch7 = await prisma.watches.create({
        data: {
            name: "Dress Olympos ",
            brand: "Zodiac",
            price: 1595,
            quantity: 5,
            description: "Dress Olympos Automatic Leather Watch",
            color: "Black",
            material: "Stainless Steel",
            digital: false,
            gender: "Male",
            imageURL: "https://fossil.scene7.com/is/image/FossilPartners/ZO9215_main?$zodiac_large$"
        }
    });

    const watch8 = await prisma.watches.create({
        data: {
            name: "Sea-Chron",
            brand: "Zodiac",
            price: 2495,
            quantity: 10,
            description: "Sea-Chron Automatic Stainless Steel Watch",
            color: "Navy",
            material: "Stainless Steel",
            digital: false,
            gender: "Male",
            imageURL: "https://fossil.scene7.com/is/image/FossilPartners/ZO3605_main?$zodiac_large$"
        }
    });

    const watch9 = await prisma.watches.create({
        data: {
            name: "Super Sea Wolf GMT",
            brand: "Zodiac",
            price: 1795,
            quantity: 5,
            description: "Super Sea Wolf GMT World Time Automatic Stainless Steel Watch            ",
            color: "White",
            material: "Stainless Steel",
            digital: false,
            gender: "Male",
            imageURL: "https://fossil.scene7.com/is/image/FossilPartners/ZO9410_main?$zodiac_large$"
        }
    });

    const watch10 = await prisma.watches.create({
        data: {
            name: "Super Sea Wolf Ceramic  ",
            brand: "Zodiac",
            price: 1795,
            quantity: 5,
            description: "Super Sea Wolf Ceramic Compression Diver Automatic Rubber Strap Watch            ",
            color: "Green",
            material: "Stainless Steel",
            digital: false,
            gender: "Male",
            imageURL: "https://fossil.scene7.com/is/image/FossilPartners/ZO9592_main?$zodiac_large$"
        }
    });

    const watch11 = await prisma.watches.create({
        data: {
            name: "Gen 6 Wellness",
            brand: "Fossil",
            price: 279,
            quantity: 10,
            description: "Gen 6 Wellness Edition Smartwatch Black Silicone",
            color: "Black",
            material: "Black Silicone",
            digital: true,
            gender: "Female",
            imageURL: "https://fossil.scene7.com/is/image/FossilPartners/FTW4069_main?$sfcc_fos_large$"
        }
    });
    const watch12 = await prisma.watches.create({
        data: {
            name: "Machine Gen 6",
            brand: "Fossil",
            price: 259,
            quantity: 10,
            description: "Machine Gen 6 Hybrid Smartwatch Smoke Stainless Steel",
            color: "Grey",
            material: "Stainless Steel",
            digital: false,
            gender: "Male",
            imageURL: "https://fossil.scene7.com/is/image/FossilPartners/FTW7070_main?$sfcc_fos_large$"
        }
    });
    const watch13 = await prisma.watches.create({
        data: {
            name: "Gen 6 Smartwatch",
            brand: "Fossil",
            price: 159,
            quantity: 10,
            description: "Gen 6 Smartwatch Brown Leather",
            color: "Grey",
            material: "Stainless Steel",
            digital: true,
            gender: "Female",
            imageURL: "https://fossil.scene7.com/is/image/FossilPartners/FTW4062_main?$sfcc_fos_large$"
        }
    });
    const watch14 = await prisma.watches.create({
        data: {
            name: "Blush Gen 6 Wellness",
            brand: "Fossil",
            price: 199,
            quantity: 10,
            description: "Gen 6 Wellness Edition Hybrid Smartwatch Blush Silicone",
            color: "Blush",
            material: "Stainless Steel",
            digital: true,
            gender: "Female",
            imageURL: "https://fossil.scene7.com/is/image/FossilPartners/FTW7083_main?$sfcc_fos_large$"
        }
    });
    const watch15 = await prisma.watches.create({
        data: {
            name: "Neutra Gen 6",
            brand: "Fossil",
            price: 114,
            quantity: 10,
            description: "Neutra Gen 6 Hybrid Smartwatch Stainless Steel",
            color: "Blue",
            material: "Stainless Steel",
            digital: false,
            gender: "Male",
            imageURL: "https://fossil.scene7.com/is/image/FossilPartners/FTW7072_main?$sfcc_fos_large$"
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
            watch_id: watch6.id
        }
    })

    await prisma.cart.create({
        data: {
            user_id: user1.id,
            watch_id: watch7.id
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

    await prisma.cart.create({
        data: {
            user_id: user3.id,
            watch_id: watch14.id
        }
    })

    await prisma.cart.create({
        data: {
            user_id: user2.id,
            watch_id: watch11.id
        }
    })

    await prisma.purchase_History.create({
        data: {
            user_id: user1.id,
            watch_id: watch2.id,
            purchase_date: new Date("2023-08-30")
        }
    })

    await prisma.purchase_History.create({
        data: {
            user_id: user2.id,
            watch_id: watch12.id,
            purchase_date: new Date("2023-08-30")
        }
    })

    await prisma.purchase_History.create({
        data: {
            user_id: user2.id,
            watch_id: watch5.id,
            purchase_date: new Date("2023-08-30")
        }
    })

    await prisma.purchase_History.create({
        data: {
            user_id: user1.id,
            watch_id: watch9.id,
            purchase_date: new Date("2023-08-30")
        }
    })

    await prisma.purchase_History.create({
        data: {
            user_id: user3.id,
            watch_id: watch3.id,
            purchase_date: new Date("2023-08-30")
        }
    })

    await prisma.purchase_History.create({
        data: {
            user_id: user3.id,
            watch_id: watch5.id,
            purchase_date: new Date("2023-08-30")
        }
    })

    await prisma.purchase_History.create({
        data: {
            user_id: user4.id,
            watch_id: watch10.id,
            purchase_date: new Date("2023-08-30")
        }
    })

    await prisma.purchase_History.create({
        data: {
            user_id: user2.id,
            watch_id: watch4.id,
            purchase_date: new Date("2023-08-30")
        }
    })

    await prisma.purchase_History.create({
        data: {
            user_id: user3.id,
            watch_id: watch12.id,
            purchase_date: new Date("2023-08-30")
        }
    })

    await prisma.purchase_History.create({
        data: {
            user_id: user4.id,
            watch_id: watch1.id,
            purchase_date: new Date("2023-08-30")
        }
    })

    await prisma.purchase_History.create({
        data: {
            user_id: user2.id,
            watch_id: watch5.id,
            purchase_date: new Date("2023-08-30")
        }
    })

    await prisma.purchase_History.create({
        data: {
            user_id: user6.id,
            watch_id: watch10.id,
            purchase_date: new Date("2023-08-30")
        }
    })

    await prisma.purchase_History.create({
        data: {
            user_id: user7.id,
            watch_id: watch15.id,
            purchase_date: new Date("2023-08-30")
        }
    })

    await prisma.purchase_History.create({
        data: {
            user_id: user8.id,
            watch_id: watch6.id,
            purchase_date: new Date("2023-08-30")
        }
    })

    await prisma.purchase_History.create({
        data: {
            user_id: user4.id,
            watch_id: watch9.id,
            purchase_date: new Date("2023-08-30")
        }
    })

    await prisma.purchase_History.create({
        data: {
            user_id: user7.id,
            watch_id: watch10.id,
            purchase_date: new Date("2023-08-30")
        }
    })

    await prisma.purchase_History.create({
        data: {
            user_id: user10.id,
            watch_id: watch6.id,
            purchase_date: new Date("2023-08-30")
        }
    })

    await prisma.purchase_History.create({
        data: {
            user_id: user9.id,
            watch_id: watch12.id,
            purchase_date: new Date("2023-08-30")
        }
    })

    await prisma.purchase_History.create({
        data: {
            user_id: user4.id,
            watch_id: watch13.id,
            purchase_date: new Date("2023-08-30")
        }
    })

    await prisma.purchase_History.create({
        data: {
            user_id: user5.id,
            watch_id: watch14.id,
            purchase_date: new Date("2023-08-30")
        }
    })
}

main()