const fastify = require('fastify')({ looger: true });


fastify.register(require('./db-connector'));
fastify.register(require('./router.js'));

const start = async () =>{
  try{
    await fastify.listen(3000);
  }catch(err){
    fastify.log.error(err);
    process.exit(1)
  }
}


start();