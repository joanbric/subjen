const fastifyPlugin = require("fastify-plugin");

async function dbConnector(fastify, options) {
  try {
    fastify.register(require("fastify-mongodb"), {
      forceClose: true,
      url: `mongodb+srv://master:${process.env.MONGO_PASS}@bus.tigys.mongodb.net/bus?retryWrites=true&w=majority`
    });
    console.log('Connected!');
  } catch (err) {
    throw new Error(err);
  }
}

module.exports = fastifyPlugin(dbConnector);
