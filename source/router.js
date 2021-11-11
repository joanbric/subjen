const express = require('express')
const router = express.Router();

/* ### Middleware ### */
// User Router
router.use('/user', require('./routes/users'))
router.use('/routes', require('./routes/routes'))






module.exports = router;
