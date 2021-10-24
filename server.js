const fastify = require('fastify')({ looger: true });

console.log('All work')
fastify.register(require('./db-connector.js'));
console.log('DB Work')

console.log(fastify.mongo);

//fastify.register(require('./router.js'));
console.log('router work');


const start = async () =>{
  try{
    await fastify.listen(3000);
  }catch(err){
    fastify.log.error(err);
    process.exit(1)
  }
}


start();