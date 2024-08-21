/* 
"id": 4,
		name: "Burger Barn",
		description: "Gourmet burgers made with the finest ingredients and creative toppings, served in a cozy atmosphere.",
		address: "101 Burger Boulevard, Flavor Town"
*/

import { Restaurant } from "@/types/Restaurant";

export const restaurants: Restaurant[] = [
  {
    id: "205961",
    image: "https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg",
    avatar:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    name: "Italian Heaven",
    rating: 4.5,
    reviewCount: 214,
    bgColor: "#F5F5FF",
    city: "Collingwood, Ontario",
    specialties: ["Italian", "Pasta", "Wine"],
    description:
      "Authentic Italian cuisine with a modern twist, featuring classic dishes from the heart of Italy.",
    address: "123 Pasta Lane, Flavor Town",
    phone: "123-456-7890",
    location: {
      latitude: 41.902782,
      longitude: 12.496366,
    },
    information: {
      opening_hours: "11:00 AM - 10:00 PM",
      website: "https://italianheaven.com",
      social_media: {
        facebook: "https://facebook.com/italianheaven",
        instagram: "https://instagram.com/italianheaven",
      },
    },
    menu: [
      {
        category: "Main Course",
        items: [
          {
            id: "101",
            name: "Margherita Pizza",
            description:
              "Classic pizza topped with fresh mozzarella, tomatoes, and basil.",
            price: 12.99,
            quantity: 0,
            availability: true,
            image:
              "https://images.pexels.com/photos/3682837/pexels-photo-3682837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            information: {
              calories: 680,
              allergens: ["Dairy", "Gluten"],
              preparation_time: "15 minutes",
            },
          },
          {
            id: "103",
            name: "Margherita Pizza",
            description:
              "Classic pizza topped with fresh mozzarella, tomatoes, and basil.",
            price: 12.99,
            quantity: 0,
            availability: true,
            image:
              "https://images.pexels.com/photos/3682837/pexels-photo-3682837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            information: {
              calories: 680,
              allergens: ["Dairy", "Gluten"],
              preparation_time: "15 minutes",
            },
          },
          {
            id: "104",
            name: "Margherita Pizza",
            description:
              "Classic pizza topped with fresh mozzarella, tomatoes, and basil.",
            price: 12.99,
            quantity: 0,
            availability: true,
            image:
              "https://images.pexels.com/photos/3682837/pexels-photo-3682837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            information: {
              calories: 680,
              allergens: ["Dairy", "Gluten"],
              preparation_time: "15 minutes",
            },
          },
          {
            id: "102",
            name: "Spaghetti Carbonara",
            description:
              "Traditional spaghetti with a creamy egg and pancetta sauce.",
            price: 13.99,
            quantity: 0,
            availability: true,
            image:
              "https://images.pexels.com/photos/725990/pexels-photo-725990.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            information: {
              calories: 720,
              allergens: ["Dairy", "Egg", "Gluten"],
              preparation_time: "20 minutes",
            },
          },
        ],
      },
      {
        category: "Bubble teas",
        items: [
          {
            id: "401",
            name: "Margherita Pizza",
            description:
              "Classic pizza topped with fresh mozzarella, tomatoes, and basil.",
            price: 12.99,
            quantity: 0,
            availability: true,
            image:
              "https://images.pexels.com/photos/3682837/pexels-photo-3682837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            information: {
              calories: 680,
              allergens: ["Dairy", "Gluten"],
              preparation_time: "15 minutes",
            },
          },
          {
            id: "403",
            name: "Margherita Pizza",
            description:
              "Classic pizza topped with fresh mozzarella, tomatoes, and basil.",
            price: 12.99,
            quantity: 0,
            availability: true,
            image:
              "https://images.pexels.com/photos/3682837/pexels-photo-3682837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            information: {
              calories: 680,
              allergens: ["Dairy", "Gluten"],
              preparation_time: "15 minutes",
            },
          },
          {
            id: "404",
            name: "Margherita Pizza",
            description:
              "Classic pizza topped with fresh mozzarella, tomatoes, and basil.",
            price: 12.99,
            quantity: 0,
            availability: true,
            image:
              "https://images.pexels.com/photos/3682837/pexels-photo-3682837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            information: {
              calories: 680,
              allergens: ["Dairy", "Gluten"],
              preparation_time: "15 minutes",
            },
          },
          {
            id: "402",
            name: "Spaghetti Carbonara",
            description:
              "Traditional spaghetti with a creamy egg and pancetta sauce.",
            price: 13.99,
            quantity: 0,
            availability: true,
            image:
              "https://images.pexels.com/photos/725990/pexels-photo-725990.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            information: {
              calories: 720,
              allergens: ["Dairy", "Egg", "Gluten"],
              preparation_time: "20 minutes",
            },
          },
        ],
      },
      {
        category: "Boissons",
        items: [
          {
            id: "501",
            name: "Margherita Pizza",
            description:
              "Classic pizza topped with fresh mozzarella, tomatoes, and basil.",
            price: 12.99,
            quantity: 0,
            availability: true,
            image:
              "https://images.pexels.com/photos/3682837/pexels-photo-3682837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            information: {
              calories: 680,
              allergens: ["Dairy", "Gluten"],
              preparation_time: "15 minutes",
            },
          },
          {
            id: "503",
            name: "Margherita Pizza",
            description:
              "Classic pizza topped with fresh mozzarella, tomatoes, and basil.",
            price: 12.99,
            quantity: 0,
            availability: true,
            image:
              "https://images.pexels.com/photos/3682837/pexels-photo-3682837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            information: {
              calories: 680,
              allergens: ["Dairy", "Gluten"],
              preparation_time: "15 minutes",
            },
          },
          {
            id: "504",
            name: "Margherita Pizza",
            description:
              "Classic pizza topped with fresh mozzarella, tomatoes, and basil.",
            price: 12.99,
            quantity: 0,
            availability: true,
            image:
              "https://images.pexels.com/photos/3682837/pexels-photo-3682837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            information: {
              calories: 680,
              allergens: ["Dairy", "Gluten"],
              preparation_time: "15 minutes",
            },
          },
          {
            id: "502",
            name: "Spaghetti Carbonara",
            description:
              "Traditional spaghetti with a creamy egg and pancetta sauce.",
            price: 13.99,
            quantity: 0,
            availability: true,
            image:
              "https://images.pexels.com/photos/725990/pexels-photo-725990.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            information: {
              calories: 720,
              allergens: ["Dairy", "Egg", "Gluten"],
              preparation_time: "20 minutes",
            },
          },
        ],
      },
      {
        category: "Desserts",
        items: [
          {
            id: "201",
            name: "Tiramisu",
            description:
              "Layered dessert with coffee-soaked ladyfingers, mascarpone cheese, and cocoa.",
            price: 6.99,
            quantity: 0,
            availability: true,
            image:
              "https://images.pexels.com/photos/4078174/pexels-photo-4078174.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            information: {
              calories: 450,
              allergens: ["Dairy", "Gluten"],
              preparation_time: "10 minutes",
            },
          },
          {
            id: "202",
            name: "Panna Cotta",
            description: "Creamy custard served with a berry compote.",
            price: 7.99,
            quantity: 0,
            availability: true,
            image:
              "https://images.pexels.com/photos/302468/pexels-photo-302468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            information: {
              calories: 350,
              allergens: ["Dairy"],
              preparation_time: "15 minutes",
            },
          },
        ],
      },
      {
        category: "Cocktails",
        items: [
          {
            id: "301",
            name: "Tiramisu",
            description:
              "Layered dessert with coffee-soaked ladyfingers, mascarpone cheese, and cocoa.",
            price: 6.99,
            quantity: 0,
            availability: true,
            image:
              "https://images.pexels.com/photos/4078174/pexels-photo-4078174.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            information: {
              calories: 450,
              allergens: ["Dairy", "Gluten"],
              preparation_time: "10 minutes",
            },
          },
          {
            id: "302",
            name: "Panna Cotta",
            description: "Creamy custard served with a berry compote.",
            price: 7.99,
            quantity: 0,
            availability: true,
            image:
              "https://images.pexels.com/photos/302468/pexels-photo-302468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            information: {
              calories: 350,
              allergens: ["Dairy"],
              preparation_time: "15 minutes",
            },
          },
        ],
      },
    ],
  },
  {
    id: "958545",
    image: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg",
    avatar:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    name: "Sushi Place",
    rating: 4.7,
    reviewCount: 214,
    bgColor: "#DEE8FF",
    city: "Collingwood, Ontario",
    specialties: ["Japanese", "Sushi", "Seafood"],
    description:
      "Experience the art of sushi making with our expert chefs, offering a wide variety of fresh and creative sushi rolls.",
    address: "456 Fish Street, Ocean City",
    phone: "234-567-8901",
    location: {
      latitude: 35.689487,
      longitude: 139.691711,
    },
    information: {
      opening_hours: "12:00 PM - 11:00 PM",
      website: "https://sushiworld.com",
      social_media: {
        facebook: "https://facebook.com/sushiworld",
        instagram: "https://instagram.com/sushiworld",
      },
    },
    menu: [
      {
        category: "Sushi",
        items: [
          {
            id: "301",
            name: "Dragon Roll",
            description:
              "Shrimp tempura and avocado roll topped with eel and sweet sauce.",
            price: 15.99,
            quantity: 0,
            availability: true,
            image: "https://example.com/images/dragon_roll.jpg",
            information: {
              calories: 450,
              allergens: ["Seafood", "Soy"],
              preparation_time: "10 minutes",
            },
          },
          {
            id: "302",
            name: "Salmon Nigiri",
            description: "Slices of fresh salmon over sushi rice.",
            price: 8.99,
            quantity: 0,
            availability: true,
            image: "https://example.com/images/salmon_nigiri.jpg",
            information: {
              calories: 250,
              allergens: ["Seafood"],
              preparation_time: "5 minutes",
            },
          },
        ],
      },
      {
        category: "Appetizers",
        items: [
          {
            id: "401",
            name: "Edamame",
            description: "Steamed and salted soybeans.",
            price: 4.99,
            quantity: 0,
            availability: true,
            image: "https://example.com/images/edamame.jpg",
            information: {
              calories: 200,
              allergens: ["Soy"],
              preparation_time: "5 minutes",
            },
          },
          {
            id: "402",
            name: "Gyoza",
            description: "Pan-fried dumplings with a savory pork filling.",
            price: 6.99,
            quantity: 0,
            availability: true,
            image: "https://example.com/images/gyoza.jpg",
            information: {
              calories: 300,
              allergens: ["Pork", "Gluten"],
              preparation_time: "10 minutes",
            },
          },
        ],
      },
    ],
  },
  {
    id: "260922",
    image: "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg",
    avatar:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    name: "Taco Fiesta",
    rating: 4.8,
    reviewCount: 214,
    bgColor: "#F5F5FF",
    city: "Collingwood, Ontario",
    specialties: ["Mexican"],
    description:
      "Vibrant Mexican eatery specializing in a variety of tacos and traditional Mexican dishes.",
    address: "789 Fiesta Road, Spice City",
    phone: "345-678-9012",
    location: {
      latitude: 19.432608,
      longitude: -99.133209,
    },
    information: {
      opening_hours: "10:00 AM - 10:00 PM",
      website: "https://tacofiesta.com",
      social_media: {
        facebook: "https://facebook.com/tacofiesta",
        instagram: "https://instagram.com/tacofiesta",
      },
    },
    menu: [
      {
        category: "Tacos",
        items: [
          {
            id: "501",
            name: "Tacos Al Pastor",
            description: "Marinated pork tacos with pineapple and cilantro.",
            price: 9.99,
            quantity: 0,
            availability: true,
            image: "https://example.com/images/tacos_al_pastor.jpg",
            information: {
              calories: 350,
              allergens: ["Pork"],
              preparation_time: "10 minutes",
            },
          },
          {
            id: "502",
            name: "Fish Tacos",
            description: "Grilled fish tacos with a zesty slaw.",
            price: 11.99,
            quantity: 0,
            availability: true,
            image: "https://example.com/images/fish_tacos.jpg",
            information: {
              calories: 400,
              allergens: ["Seafood"],
              preparation_time: "12 minutes",
            },
          },
        ],
      },
      {
        category: "Sides",
        items: [
          {
            id: "601",
            name: "Guacamole",
            description: "Fresh avocado dip with lime and cilantro.",
            price: 5.99,
            quantity: 0,
            availability: true,
            image: "https://example.com/images/guacamole.jpg",
            information: {
              calories: 250,
              preparation_time: "5 minutes",
            },
          },
          {
            id: "602",
            name: "Chips and Salsa",
            description: "Crispy tortilla chips served with house-made salsa.",
            price: 3.99,
            quantity: 0,
            availability: true,
            image: "https://example.com/images/chips_salsa.jpg",
            information: {
              calories: 300,
              preparation_time: "5 minutes",
            },
          },
        ],
      },
    ],
  },
  {
    id: "2290753",
    image: "https://images.pexels.com/photos/2290753/pexels-photo-2290753.jpeg",
    avatar:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    name: "Burger Joint",
    description:
      "Gourmet burgers made with the finest ingredients and creative toppings, served in a cozy atmosphere.",
    rating: 4.2,
    reviewCount: 214,
    bgColor: "#F0F5F7",
    city: "Collingwood, Ontario",
    specialties: ["American"],
    address: "101 Burger Boulevard, Flavor Town",
    phone: "456-789-0123",
    location: {
      latitude: 40.712776,
      longitude: -74.005974,
    },
    information: {
      opening_hours: "10:00 AM - 10:00 PM",
      website: "https://Burger-joint.com",
      social_media: {
        facebook: "https://facebook.com/Burger-joint",
        instagram: "https://instagram.com/Burger-joint",
      },
    },
    menu: [
      {
        category: "Burgers",
        items: [
          {
            id: "701",
            name: "Classic Cheeseburger",
            description:
              "Juicy beef patty with cheddar cheese, lettuce, tomato, and pickles.",
            price: 10.99,
            quantity: 0,
            availability: true,
            image: "https://example.com/images/classic_cheeseburger.jpg",
          },
          {
            id: "702",
            name: "BBQ Bacon Burger",
            description:
              "Beef burger topped with bacon, cheddar, and BBQ sauce.",
            price: 12.99,
            quantity: 0,
            availability: true,
            image: "https://example.com/images/bbq_bacon_burger.jpg",
          },
        ],
      },
      {
        category: "Sides",
        items: [
          {
            id: "801",
            name: "French Fries",
            description: "Crispy golden fries served with ketchup.",
            price: 3.99,
            quantity: 0,
            availability: true,
            image: "https://example.com/images/french_fries.jpg",
          },
          {
            id: "802",
            name: "Onion Rings",
            description: "Crispy onion rings with a side of ranch dressing.",
            price: 4.99,
            quantity: 0,
            availability: true,
            image: "https://example.com/images/onion_rings.jpg",
          },
        ],
      },
    ],
  },
  {
    id: "1383776",
    image: "https://images.pexels.com/photos/1383776/pexels-photo-1383776.jpeg",
    avatar:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    name: "Chinese Dragon",
    rating: 4.8,
    reviewCount: 214,
    bgColor: "#F3EFF9",
    city: "Collingwood, Ontario",
    specialties: ["Chinese"],
    description:
      "Explore a diverse range of Chinese dishes, from traditional favorites to modern interpretations.",
    address: "202 Noodle Street, Flavor Town",
    phone: "567-890-1234",
    location: {
      latitude: 39.904202,
      longitude: 116.407394,
    },
    menu: [
      {
        category: "Main Course",
        items: [
          {
            id: "901",
            name: "Kung Pao Chicken",
            description: "Stir-fried chicken with peanuts and chili peppers.",
            price: 13.99,
            quantity: 0,
            availability: true,
            image: "https://example.com/images/kung_pao_chicken.jpg",
          },
          {
            id: "902",
            name: "Sweet and Sour Pork",
            description: "Pork in a sweet and tangy sauce with pineapple.",
            price: 12.99,
            quantity: 0,
            availability: true,
            image: "https://example.com/images/sweet_sour_pork.jpg",
          },
        ],
      },
    ],
  },
];
