const fastifyPlugin = require("fastify-plugin");

async function dbConnector(fastify, options) {
  try {
    fastify.register(require("fastify-mongodb"), {
      url: 'mongodb+srv://bus.tigys.mongodb.net/bus --username master'
    });
  } catch (err) {
    throw new Error(err);
  }
}

module.exports = fastifyPlugin(dbConnector);
