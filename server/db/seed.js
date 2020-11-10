const {
  Users,
  db,
  Sessions,
  Recipes
} = require("./index");

const { saltAndHash } = require('../utils/hashPasswordFunc')

const seed = async () => {
  try {
  const users = [
    {
      firstName: "Katerina",
      lastName: "Solovyova",
      email: "katerina@test.com",
      hashedPassword: saltAndHash("secret"),
      admin: true,
      favoriteDishType: ["dessert"],
      favoriteCuisine: ["Mediterranean"]
    },
    {
      firstName: "Brendan",
      lastName: "Evans",
      email: "brendan@test.com",
      hashedPassword: saltAndHash("secret"),
      admin: true,
      favoriteDishType: ["main course"],
      favoriteCuisine: ["Eastern European"],
      intolerances: ["Dairy"]
    },
    {
      firstName: "April",
      lastName: "Jenkins",
      email: "april@test.com",
      hashedPassword: saltAndHash("password"),
      admin: false,
      favoriteDishType: ["snack"],
      favoriteCuisine: ["Thai"]
    },
  ];

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  const recipes = [
    {
      title: "Sample Recipe 1",
      image: "https://insomniacookies.com/uploads/products/product_cookie_deluxe_ChocolateChunk_600x600_1565180542.jpg",
      servings: 1,
      readyInMinutes: 5,
      sourceUrl: "https://insomniacookies.com/",
      chefNotes: "fucking delicious",
      healthScore: 1,
      dishType: ["dessert"],
      cuisine: ["American"],
      extendedIngredients: [{"name": "butter", unit : "tbsp"},{name: "milk", unit : "tsp"}]
    },
    {
      title: "Cut Flowers",
      price: 14.99,
      category: ["flowers", "gifts"],
      tags: ["tag1", "tag2", "tag3"],
      lightRequirement: "na",
      description: "You'll love these flowers. They smell nice.",
      inventory: 15,
    },
    {
      title: "Cactus",
      price: 5.99,
      category: ["indoor", "gifts"],
      tags: ["drought tolerant", "tag2", "tag3"],
      lightRequirement: "full sun",
      description: "Watch out for the spikes!",
      inventory: 5,
    }
  ];

  try {
    await db.sync({ force: true });
    for (let i=0; i<users.length; i++) {
      await Users.create(users[i])
      await Recipes.create(recipes[i])
    }

    console.log("seeded everything!");
  }

  catch (error) {
    console.log("ERROR", error);
  }

  }

  catch (error) {
    console.log(error)
  }
};

seed();
