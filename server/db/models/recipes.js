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
  dishTypes: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  },
  cuisines: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  },
  intolerances: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  },
  extendedIngredients: {
    type: Sequelize.ARRAY(Sequelize.JSON)
  },
  instructions: {
    type: Sequelize.TEXT
  },
  analyzedInstructions: {
    type: Sequelize.ARRAY(Sequelize.JSON)
  },
})

module.exports = Recipes
