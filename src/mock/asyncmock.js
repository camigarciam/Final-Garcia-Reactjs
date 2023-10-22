const products = [
    {
      id: "1",
      name: "BTS Lightstick (ARMY Bomb)",
      price: 40.99,
      category: "Lightstick",
      description: "The official BTS ARMY Bomb lightstick is a must-have for any ARMY. It features synchronized lighting effects during concerts, creating a magical experience for fans.",
      image: "https://m.media-amazon.com/images/I/519nurbq5kL.jpg",
    },
    {
      id: "2",
      name: "Blackpink Album - 'The Album'",
      price: 24.99,
      category: "Album",
      description: "Immerse yourself in the music of Blackpink with their album 'The Album.' It includes chart-topping tracks that will keep you dancing all day.",
      image: "https://i.ytimg.com/vi/Z12wtGgByP0/maxresdefault.jpg",
    },
    {
      id: "3",
      name: "EXO Photocard Set",
      price: 10.99,
      category: "Photocard",
      description: "Collect these EXO photocards to complete your EXO collection. These high-quality photocards are perfect for fans of the group.",
      image: "https://i5.walmartimages.com/asr/eaef8cad-3115-48e4-9e4c-28c744879827.50f493a1984a0d84fff7173cb07e00d7.jpeg",
    },
    {
      id: "4",
      name: "TWICE Lightstick (Candy Bong Z)",
      price: 35.99,
      category: "Lightstick",
      description: "TWICE fans, get ready to light up the concert with the Candy Bong Z lightstick. Join the Candy Bong ocean and show your support for TWICE.",
      image: "https://ae01.alicdn.com/kf/H8dbbd6695e2842bfbc2388cdbd245d89T.jpg?width=750&height=750&hash=1500",
    },
    {
      id: "5",
      name: "Stray Kids Album - 'GO生' (GO生)",
      price: 29.99,
      category: "Album",
      description: "Stray Kids' 'GO生' album offers a musical journey like no other. Discover their unique sound and powerful lyrics.",
      image: "https://m.media-amazon.com/images/I/91IiFwszrKL.jpg",
    },
    {
      id: "6",
      name: "Red Velvet Photocard Set",
      price: 11.99,
      category: "Photocard",
      description: "Calling all ReVeluvs! Expand your Red Velvet collection with these beautifully designed photocards. A must-have for any fan.",
      image: "https://i.etsystatic.com/23534806/r/il/212d36/3348508045/il_570xN.3348508045_g9ti.jpg",
    },
    {
      id: "7",
      name: "NCT Lightstick (NCTzen)",
      price: 38.99,
      category: "Lightstick",
      description: "Wave your NCT lightstick proudly as a certified NCTzen. Join the NCT fandom and light up concerts with this amazing lightstick.",
      image: "https://d22fxaf9t8d39k.cloudfront.net/850f026ff739a9af4decb590cca6620fb2a0ff5f82346afab992a1503a02439932552.jpeg",
    },
    {
      id: "8",
      name: "IZ*ONE Album - 'BLOOM*IZ'",
      price: 27.99,
      category: "Album",
      description: "Experience the magical world of IZ*ONE with their 'BLOOM*IZ' album. It's filled with enchanting melodies and captivating artwork.",
      image: "https://m.media-amazon.com/images/I/61G+Zf3Ug2L._UF1000,1000_QL80_.jpg",
    },
    {
      id: "9",
      name: "GOT7 Photocard Set",
      price: 12.99,
      category: "Photocard",
      description: "Calling all Ahgases! Complete your GOT7 collection with these adorable GOT7 photocards. They're perfect for any collector.",
      image: "https://i.etsystatic.com/34088683/r/il/427767/4484984005/il_fullxfull.4484984005_gxxh.jpg",
    },
    {
      id: "10",
      name: "Dreamcatcher Lightstick (mongmongie)",
      price: 37.99,
      category: "Lightstick",
      description: "Dreamcatcher fans, light up your world with the unique mongmongie lightstick. Be part of the InSomnia family and enjoy concerts in style.",
      image: "https://external-preview.redd.it/dCGvVmk7nmLBLRjgHuc9hM6d1HW06GII9uzGv33URO0.jpg?width=640&crop=smart&auto=webp&s=443af6ee548a8e83628722a933e84c4b12ddc99d",
    },
    {
      id: "11",
      name: "MAMAMOO Album - 'Reality in Black'",
      price: 26.99,
      category: "Album",
      description: "Indulge in the soulful music of MAMAMOO with their 'Reality in Black' album. Their powerful vocals and songs will leave you mesmerized.",
      image: "https://i.ebayimg.com/images/g/-r4AAOSwictdwRb2/s-l1200.jpg",
    },
    {
      id: "12",
    name: "ITZY Photocard Set",
    price: 13.99,
    category: "Photocard",
    description: "Discover the charm of ITZY with these adorable ITZY photocards. Perfect for MIDZYs and collectors of K-pop memorabilia.",
    image: "https://www.thejellyhouse.com//image/cache/catalog/product%206/ITZY%20-%20CIL%20PC%20SELFIE%20SET%201-490x490.jpg",
  },
  {
    id: "13",
    name: "ATEEZ Lightstick (ATINY)",
    price: 34.99,
    category: "Lightstick",
    description: "ATINYs, get ready to light up the stage with the ATEEZ lightstick. Be part of the ATEEZ wave and create unforgettable concert memories.",
    image: "https://0.soompi.io/wp-content/uploads/2020/01/20211054/ateez-light-stick-2.jpeg",
  },
    {
      id: "14",
      name: "Dreamcatcher Album - Road to Utopia",
      price: 28.99,
      category: "Album",
      description: "Take a musical journey with Dreamcatcher's 'Road to Utopia' album. Experience the fusion of rock and pop in every track.",
      image: "https://images-cdn.ubuy.co.in/6353968f4bae837197084c86-dreamcatcher-dystopia-road-to-utopia.jpg"
    },
    {
      id: "15",
      name: "Stray Kids Photocard Set",
      price: 14.99,
      category: "Photocard",
      description: "Calling all Stay! Enhance your Stray Kids collection with these stunning Stray Kids photocards. A treasure for any fan.",
      image: "https://i.ebayimg.com/images/g/RtkAAOSwRDtiblDh/s-l1600.jpg"
    },
    {
      id: "16",
      name: "ATEEZ Album - 'TREASURE EP.3: One To All'",
      price: 25.99,
      category: "Album",
      description: "Dive into the world of ATEEZ with their album 'TREASURE EP.3: One To All.' Discover the journey of the Treasure series.",
      image: "https://www.kpopusaonline.com/wp-content/uploads/2019/11/777.17.png"
    },
    {
      id: "17",
      name: "TWICE Photocard Set",
      price: 15.99,
      category: "Photocard",
      description: "Complete your TWICE collection with these adorable TWICE photocards. They're a perfect addition for once and K-pop collectors.",
      image: "https://ae01.alicdn.com/kf/S5f66d965c60c456b955d7d33f4eeb68cM.jpg_640x640Q90.jpg_.webp"
    },
    {
      id: "18",
      name: "SEVENTEEN Lightstick (Carat Bong)",
      price: 36.99,
      category: "Lightstick",
      description: "Carats, get ready to light up the world with the SEVENTEEN Carat Bong. Show your unwavering support for SEVENTEEN at concerts.",
      image: "https://oppastore.in/cdn/shop/files/seventeen-official-lightstick-new-version-3-carat-bong-oppastore-3.png?v=1693799547"
    },
    {
      id: "19",
      name: "Dreamcatcher Photocard Set",
      price: 16.99,
      category: "Photocard",
      description: "Collect these mesmerizing Dreamcatcher photocards and take a piece of Dreamcatcher's unique concept with you everywhere you go.",
      image: "https://i.ebayimg.com/images/g/H58AAOSwwfhkh-Uu/s-l1600.jpg"
    },
    {
      id: "20",
      name: "Stray Kids Album - '5 star'",
      price: 23.99,
      category: "Album",
      description: "Explore the world of Stray Kids with their album '5 star.' It's packed with a variety of tracks and artistic design.",
      image: "https://http2.mlstatic.com/D_NQ_NP_665312-MLA69762468912_062023-O.webp"
    },
    {
      id: "21",
      name: "IU Lightstick (UAENA)",
      price: 33.99,
      category: "Lightstick",
      description: "The official IU lightstick for all UAENA fans. It features a unique design and various lighting modes to enhance your concert experience.",
      image: "https://kpopheart.com/wp-content/uploads/2022/04/43292-qegpnt.jpg"
    },
    {
      id: "22",
      name: "TWICE Album - 'Eyes Wide Open'",
      price: 27.99,
      category: "Album",
      description: "Experience TWICE's music in a whole new way with their 'Eyes Wide Open' album. It includes their hit tracks and beautiful album art.",
      image: "https://www.kpopusaonline.com/wp-content/uploads/2020/10/214.1.png"
    },
    {
      id: "23",
      name: "BLACKPINK Photocard Set",
      price: 9.99,
      category: "Photocard",
      description: "Collect and trade these stunning BLACKPINK photocards. A must-have for BLINKs to celebrate their favorite girl group.",
      image: "https://hallyusuperstore.com/cdn/shop/products/KakaoTalk_20221021_170147096_04.jpg?v=1666340536&width=1080"
    },
    {
      id: "24",
      name: "GFRIEND Lightstick (Buddy Bong)",
      price: 35.99,
      category: "Lightstick",
      description: "Wave your Buddy Bong at GFRIEND concerts and enjoy synchronized lighting effects with fellow BUDDY fans.",
      image: "https://ae01.alicdn.com/kf/H4f2d30d69a044f3797cda0971caee26fT/Barra-de-luz-Kpop-GFRIEND-Ver-2-con-Control-bluetooth-l-mpara-de-brillo-de-alta.jpg"
    },
    {
      id: "25",
      name: "DAY6 Album - 'The Book of Us: The Demon'",
      price: 29.99,
      category: "Album",
      description: "Explore the musical journey of DAY6 with their 'The Book of Us: The Demon' album. It's a masterpiece for My Days.",
      image: "https://wearekpop.com/cdn/shop/products/009001010553_grande.jpg?v=1616239808"
    },
    {
      id: "26",
      name: "LOONA Photocard Set",
      price: 11.99,
      category: "Photocard",
      description: "Discover the vivid world of LOONA with these beautifully designed photocards. Perfect for Orbits and collectors.",
      image: "https://i.ebayimg.com/images/g/PPMAAOSwv9pfNq5q/s-l1200.webp"
    },
    {
      id: "27",
      name: "THE BOYZ Lightstick ",
      price: 36.99,
      category: "Lightstick",
      description: "Illuminate the stage with your lightstick and cheer for THE BOYZ. It's an essential accessory for all THE BOYz fans.",
      image: "https://cdn.shopify.com/s/files/1/0469/3927/5428/products/the-boyz-official-light-stick-106516.jpg"
    }, 
    {
        id: "28",
        name: "Red Velvet Album - 'The ReVe Festival: Day 2'",
        price: 25.99,
        category: "Album",
        description: "Get your hands on Red Velvet's 'The ReVe Festival: Day 2' album with a captivating collection of songs and artwork.",
        image: "https://artboxvan.com/cdn/shop/products/ScreenShot2020-08-18at11.13.04PM_2d034d97-5cf6-49b5-bd29-d4ce6cf0c2c0_2048x.png?v=1665285569"
      },
      {
        id: "29",
        name: "DREAMCATCHER Photocard Set",
        price: 14.99,
        category: "Photocard",
        description: "Capture the essence of the dreamies with these high-quality photocards. INSOMNIAs, don't miss out on this collector's item.",
        image: "https://i.ebayimg.com/images/g/CbgAAOSwaWxkf11R/s-l1600.jpg"
      },
      {
        id: "30",
        name: "IZ*ONE Lightstick (WIZ*ONE)",
        price: 37.99,
        category: "Lightstick",
        description: "WIZ*ONEs, be ready to light up the world with the IZ*ONE lightstick. It's a symbol of love and support for the group.",
        image: "https://welcomekpop.com/cdn/shop/products/IZ1.jpg?v=1582067097"
      },
      {
        id: "31",
        name: "Dreamcatcher - 'Apocalypse: From Us'",
        price: 26.99,
        category: "Album",
        description: "Join the 'Apocalypse' finale with Dreamcatcher's mesmerizing album. Experience the queens of rock in K-pop in their musical glory.",
        image: "https://m.en.dreamcatcher.kr/web/product/big/202305/08f308d21393195041f143ffd7abb4d2.jpg"
      },
      {
        id: "32",
        name: "STRAY KIDS Photocard Set",
        price: 14.99,
        category: "Photocard",
        description: "Collect these enchanting SKZ photocards and capture the essence of the Stray kids specialness in your collection.",
        image: "https://hallyusuperstore.com/cdn/shop/products/KakaoTalk_20221018_200507778_16.jpg"
      },
      {
        id: "33",
        name: "TWICE Album - 'Formula of Love'",
        price: 29.99,
        category: "Album",
        description: "Dive into the world of love with TWICE's 'Formula of Love' album. Their sweet melodies and harmonies will warm your heart.",
        image: "https://cf.shopee.ph/file/937d181e5e7558e3d5e0e6b9e65c54c0"
      },
      {
        id: "34",
        name: "EXO Lightstick (EXO-L)",
        price: 39.99,
        category: "Lightstick",
        description: "EXO-Ls, light up the EXO concert with the official EXO lightstick. Be part of the silver ocean and support your favorite group.",
        image: "https://media.karousell.com/media/photos/products/2022/8/7/exo_lightstick_ver_3_1659871901_77ece111.jpg"
      },
      {
        id: "35",
        name: "GOT7 Album - 'DYE'",
        price: 25.99,
        category: "Album",
        description: "Experience the vibrant world of GOT7 with their 'DYE' album. Let the energy and creativity of GOT7 fill your days.",
        image: "https://sukoshimart.com/cdn/shop/products/got7-dye-mini-album_1024x1024.jpg?v=1681169845"
      },
      {
        id: "36",
        name: "MAMAMOO Lightstick (MooBong)",
        price: 37.99,
        category: "Lightstick",
        description: "MooMoos, get ready to shine with the MooBong lightstick. Light up the MAMAMOO concerts and enjoy the captivating performances.",
        image: "https://i.ebayimg.com/images/g/CLoAAOSw0Y9kciHU/s-l1200.webp"
      },
      {
        id: "37",
        name: "ITZY Album - 'Guess Who'",
        price: 28.99,
        category: "Album",
        description: "Join the 'Guess Who' adventure with ITZY's album. Experience their unique style and unstoppable charisma.",
        image: "https://down-ph.img.susercontent.com/file/ca750d98ba44ff3e0d052fdfeda79bb4"
      },
      {
        id: "38",
        name: "Stray Kids Lightstick (STAY)",
        price: 38.99,
        category: "Lightstick",
        description: "STAYs, hold your Stray Kids lightstick high and be part of the STAY ocean. Create unforgettable moments at Stray Kids concerts.",
        image: "https://pbs.twimg.com/media/FyzwBvEXwAAaV93.jpg:large"
      },
      {
        id: "39",
        name: "BLACKPINK Lightstick (BLINK Bong)",
        price: 36.99,
        category: "Lightstick",
        description: "BLINKs, light up your world with the iconic BLINK Bong lightstick. Join the pink ocean at BLACKPINK concerts and share the love.",
        image: "https://files.cults3d.com/uploaders/20328478/illustration-file/72b3a9c2-a433-4e84-82c9-593b5cc536e3/portada.jpg"
      },
      {
        id: "40",
        name: "TWICE Photocard Set - 'The Feels'",
        price: 16.99,
        category: "Photocard",
        description: "Collect TWICE's 'The Feels' photocards and capture the emotions of their music and performances in your collection.",
        image: "https://i.ebayimg.com/images/g/WOkAAOSwT9ZjEP1l/s-l1200.webp"
      }
      
];


export default products
  

export const getProducts = () =>  {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        },100)
    })
}

export const getProductById = (id) => {
    return new Promise(resolve => {
      setTimeout(() => {
          console.log(products);
          const product = products.find(prod => prod.id === id);
          console.log("product", typeof(id),id)
          resolve(product);
        },100)
    })
}

export const getProductsByCategory = (category) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productsByCategory = products.filter(prod => prod.category === category);
            resolve(productsByCategory);
        })
    })
}