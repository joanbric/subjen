const fastifyPlugin = require('fastify-plugin');

async function dbConnector(fastify, options){
  fastify.register(require('fastify-mongodb'),{
    url: 'mongodb+srv://bus.tigys.mongodb.net/myFirstDatabase" --username master'
  })
}


module.exports = fastifyPlugin(dbConnector);