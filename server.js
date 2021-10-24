const fastify = require('fastify')({ looger: true });

const start = async () =>{
  try{
console.log('All work')
await fastify.register(require('./db-connector.js'));
console.log('DB Work')

fastify.register(require('./router.js'));
console.log('router work');


    await fastify.listen(3000);
  }catch(err){
    fastify.log.error(err);
    process.exit(1)
  }
}


start();