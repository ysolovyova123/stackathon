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
      instructions: "1. Add flour 2. Do something else 3. Finish the recipe",
      analyzedInstructions: [{number: 1, step: "Preheat the oven to 450&#176;. Butter and lightly …excess flour."}, {number: 2, step: "In a double boiler, over simmering water, melt the… and salt at high speed"}, {number: 3, step: "Whisk the chocolate until smooth. Quickly fold it"}, {number: 4, step: "Let the cakes cool in the ramekins for 1 minute"}, {number: 5, step: "Serve immediately."}],
      extendedIngredients: [{original: "4 tbsp butter"},{original: "2 tsp chocolate"}]
    },
    {
      title: "Sample Recipe 2",
      image: "https://thestayathomechef.com/wp-content/uploads/2018/03/Lemon-Chicken-3-small.jpg",
      servings: 2,
      readyInMinutes: 10,
      sourceUrl: "https://www.foodnetwork.com",
      chefNotes: "add more lemon",
      healthScore: 10,
      dishType: ["main course"],
      cuisine: ["Mediterranean"],
      instructions: "1. Add chicken 2. Do something else 3. Finish the recipe now",
      analyzedInstructions: [{number: 1, step: "Preheat the oven to 450"}, {number: 2, step: "Mix chicken with lemon"}, {number: 3, step: "Add olive oil"}, {number: 4, step: "Serve immediately"}],
      extendedIngredients: [{original: "2 lbs chicken"},{original: "2 tbsp lemon juice"}]
    },
    {
      title: "Sample Recipe 3",
      image: "https://i.ytimg.com/vi/7b0dh_baAcc/maxresdefault.jpg",
      servings: 4,
      readyInMinutes: 40,
      sourceUrl: "https://www.foodandwine.com",
      chefNotes: "perfect as is",
      healthScore: 15,
      dishType: ["main course"],
      cuisine: ["Mediterranean"],
      instructions: "1. Add tuna 2. You're done",
      analyzedInstructions: [{number: 1, step: "Add tuna"}, {number: 2, step: "Mix all the ingredients and serve"}],
      extendedIngredients: [{original: "1 pack of tuna"}, {original: "1 whole lemon"}, {original: "some love"}]
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
