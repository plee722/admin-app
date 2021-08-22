const router = require('express').Router()

// Organizes routes into central spot
router.use('/users', require('./routes/users'))
router.use('/items', require('./routes/items'))
router.use('/orders', require('./routes/orders'))

// Middleware for generating 404 and forwarding requests with no router to error-handling endware
router.use((req, res, next) => {
  const err = new Error('Not found.')
  err.status = 404
  next(err)
})

module.exports = router