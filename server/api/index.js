const router = require('express').Router();

router.use('/users', require('./users')) // api/users route
router.use('/recipes', require('./recipes')) // api/recipes route

router.use((req, res, next) => { //api
  const err = new Error('API route not found!')
  err.status = 404
  next(err)
})


module.exports = router
