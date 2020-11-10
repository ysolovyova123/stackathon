const { Sequelize } = require('sequelize');
const db = require('../database');

const Recipes = db.define("recipes", {
  title: Sequelize.TEXT,
  image: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: "https://foodphotographyblog.com/wp-content/uploads/2018/08/Chefs-hat.png",
  },
  servings: Sequelize.INTEGER,
  readyInMinutes: Sequelize.INTEGER,
  sourceUrl: {
    type:Sequelize.STRING
  },
  summary: Sequelize.TEXT,
  chefNotes: Sequelize.TEXT,
  healthScore: Sequelize.INTEGER,
  dishType: {
    type: Sequelize.ARRAY(Sequelize.ENUM("main course", "side dish", "dessert", "appetizer", "salad", "bread", "breakfast", "soup", "beverage","sauce", "marinade", "fingerfood", "snack", "drink"))
  },
  cuisine: {
    type: Sequelize.ARRAY(Sequelize.ENUM("African", "American", "British", "Cajun", "Caribbean", "Chinese", "Eastern European", "European", "French","German", "Greek", "Indian", "Irish", "Italian","Japanese", "Jewish", "Korean", "Latin American", "Mediterranean", "Mexican", "Middle Eastern", "Nordic", "Southern","Spanish", "Thai", "Vietnamese"))
  },
  intolerances: {
    type: Sequelize.ARRAY(Sequelize.ENUM("Dairy", "Egg", "Gluten", "Grain", "Peanut", "Seafood", "Sesame", "Shellfish", "Soy", "Sulfite", "Tree Nut", "Wheat"))
  }
})

module.exports = Recipes
