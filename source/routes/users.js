const express = require('express')
const router = express.Router();


router.get('/', (req, res) => {
  res.json({
      id: '001',
      nombre: 'Jhon Brinoes',
      edad: '26 anios'
  })
})

module.exports = router