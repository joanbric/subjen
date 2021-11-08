const express =  require('express');
const router = express.Router();
const controller = require('../controllers/routes')

router.get('/', async (req, res) => {
    res.send(await controller.getAllRoutes())
})

router.post('/', async(req, res) => {
    controller.addRoute({
        name: "Ruta 2",
        pos:{
            lat: "0002",
            lon: "0004"
        }
    })

    res.send('good')
})

module.exports = router