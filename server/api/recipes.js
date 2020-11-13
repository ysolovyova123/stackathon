const router = require('express').Router()
const {Users, Recipes, Sessions} = require('../db/index')

router.get('/', async(req, res, next) => { // api/recipes
  try {
    res.send(await Recipes.findAll());
  }
  catch (ex) {
    next (ex)
  }
})

router.get('/:recipeId', async(req, res, next) => { // single user profile
  try {
    const singleRecipe = await Recipes.findOne({
      where: {
        id: req.params.recipeId
      },
      include: [ Users ]
    });
    res.send(singleRecipe)
  }
  catch (ex) {
    next (ex)
  }
})

router.get('/users/:userId', async(req, res, next) => { // all recipes for a user (api/recipes/users/userId)
  try {
    const userRecipes = await Recipes.findAll({
      where: {
        userId: req.params.userId
      }
    });
    res.send(userRecipes)
  }
  catch (ex) {
    next (ex)
  }
})



router.post('/', async(req,res,next) => { // create a user
  try {
    const newRecipe = await Recipes.create(req.body)
    res.status(201).send(newRecipe)
  }
  catch (ex) {
    res.status(401).send({
      message: 'Cannot create the recipe'
    })
  }
})

// router.put('/:userId', async(req,res,next) => {
//   const {firstName, lastName, email, admin} = req.body
//   try {
//     await Users.update({firstName, lastName, email, admin},{
//       where: {
//         id: req.params.userId
//           }
//         }
//     )
//     res.sendStatus(200);
//   } catch (error) {
//     console.log(error)
//   }
// })

// router.delete('/:userId', async(req,res,next) => {
//   try {
//     await Users.destroy({where: {id: req.params.userId}})
//     res.sendStatus(200)
//   } catch (error) {
//     console.log(error)
//     res.sendStatus(500)
//   }

// })

module.exports = router;
