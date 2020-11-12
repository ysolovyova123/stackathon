const router = require('express').Router()
const {Users, Recipes, Sessions} = require('../db/index')

router.get('/', async(req, res, next) => { // api/users
  try {
    res.send(await Users.findAll());
  }
  catch (ex) {
    next (ex)
  }
})

router.get('/:userId', async(req, res, next) => { // single user profile
  try {
    const userProfile = await Users.findOne({
      where: {
        id: req.params.userId
      },
      include: [ Sessions, Recipes ]
    });
    res.send(userProfile)
  }
  catch (ex) {
    next (ex)
  }
})

router.post('/', async(req,res,next) => { // create a user (api/users)
  try {
    const newUser = await Users.create(req.body)
    res.status(201).send(newUser)
  }
  catch (ex) {
    res.status(401).send({
      message: 'Cannot create a user with an already taken username'
    })
  }
})

router.post('/login', async(req,res,next) => { // log in a user (api/users/login)
  try {
    console.log('Login request on route: ',req.body);
    const {email, password} = req.body
    let user = await Users.findOne(
      {
        where: {
          email,
          hashedPassword: password
        },
        include: { all: true, nested: true }, // this includes data from the associated tables
      attributes: { exclude: ["hashedPassword"] }
      }
    )

    if (!user) {
      res.sendStatus(401)
    }

    else {
      console.log('Trying to find user and found this user: ', user)
      res.send(user);
    }

  }
  catch (ex) {
    next (ex)
  }
})

// router.post('/register', async(req,res,next) => { // register a user (api/users/login)
//   try {
//     const newUser = await Users.create(req.body)
//     res.status(201).send(newUser)
//   }
//   catch (ex) {
//     res.status(401).send({
//       message: 'Cannot create a user with an already taken username'
//     })
//   }
// })

router.delete('/:userId', async(req,res,next) => { // delete a user (api/users)
  try {
    await Users.destroy({where: {id: req.params.userId}})
    res.sendStatus(200)
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
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
