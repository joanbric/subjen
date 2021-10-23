const fastify = require('fastify')({ looger: true })

fastify.get('/', async (request, response) =>{
  return 'world'
});

const start = async () =>{
  try{
    await fastify.listen(3000);
  }catch(err){
    fastify.log.error(err);
    process.exit(1)
  }
}


start();