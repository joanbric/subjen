const express = require('express')
const router = express.Router();

/* ### Middleware ### */
// User Router
router.use('/user', require('./routes/users'))
router.use('/routes', require('./routes/routes'))




router.get('/', (req, res) => {
  res.json({'message': 'Hola index'})
})

module.exports = router;
