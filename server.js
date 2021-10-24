const fastify = require("fastify")({ loger: true });

const start = async () => {
  try {
    
    fastify.register(require("./db-connector.js"));
    fastify.register(require("./router.js"));
    
    await fastify.listen(3000);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
