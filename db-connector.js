const fastifyPlugin = require("fastify-plugin");

async function dbConnector(fastify, options) {
  try {
    fastify.register(require("fastify-mongodb"), {
      forceClose: true,
      url: 'mongodb+srv://master:${proccess.env.PASS}@bus.tigys.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
    });
  } catch (err) {
    throw new Error(err);
  }
}

module.exports = fastifyPlugin(dbConnector);
