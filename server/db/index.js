const db = require('./database');
const Recipes = require('./models/recipes')
const Sessions = require('./models/sessions')
const Users = require('./models/users')

Users.hasMany(Sessions);
Sessions.belongsTo(Users);

Users.hasMany(Recipes);
Recipes.belongsTo(Users);

module.exports= {
  db,
  Recipes,
  Sessions,
  Users
}
