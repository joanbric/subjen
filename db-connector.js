const fastifyPlugin = require("fastify-plugin");

async function dbConnector(fastify, options) {
  try {
    fastify.register(require("fastify-mongodb"), {
      forceClose: true,
      url: 'mongodb+srv://bus.tigys.mongodb.net/bus'
    });
  } catch (err) {
    throw new Error(err);
  }
}

module.exports = dbConnector//fastifyPlugin(dbConnector);
