const mongoose = require('mongoose')

const RoutesSchema = mongoose.Schema({
    name: String,
    pos: {
        lat: String,
        lon: String
    }
})


module.exports = mongoose.model('routes', RoutesSchema)