const { Sequelize } = require('sequelize');
const db = require('../database');

const Users = db.define("users", {
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING,
  email: {
    type: Sequelize.STRING,
    unique:true,
    allowNull:true
  },
  hashedPassword: {
    type:Sequelize.STRING,
    allowNull:true
  },
  admin: {
    type:Sequelize.BOOLEAN,
    defaultValue:false
  },
  favoriteDishType: {
    type: Sequelize.ARRAY(Sequelize.ENUM("main course", "side dish", "dessert", "appetizer", "salad", "bread", "breakfast", "soup", "beverage","sauce", "marinade", "fingerfood", "snack", "drink"))
  },
  favoriteCuisine: {
    type: Sequelize.ARRAY(Sequelize.ENUM("African", "American", "British", "Cajun", "Caribbean", "Chinese", "Eastern European", "European", "French","German", "Greek", "Indian", "Irish", "Italian","Japanese", "Jewish", "Korean", "Latin American", "Mediterranean", "Mexican", "Middle Eastern", "Nordic", "Southern","Spanish", "Thai", "Vietnamese"))
  },
  intolerances: {
    type: Sequelize.ARRAY(Sequelize.ENUM("Dairy", "Egg", "Gluten", "Grain", "Peanut", "Seafood", "Sesame", "Shellfish", "Soy", "Sulfite", "Tree Nut", "Wheat"))
  }
})

module.exports= Users
