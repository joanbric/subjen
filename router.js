async function router(fastify, options) {
  const collection = fastify.mongo.db.collection('users')
  
  fastify.get("/", async (request, response) => {
    return "world";
  });
  
  fastify.get('/animals', async (req, reply) =>{
    const result = await collection.find().toArray()
    if(result.length === 0){
      throw new Error('No documents found');
    }
    return result;
  })
  
  
  fastify.get('/animals/:animal', async (req, replay) => {
    const result = await collection.findOne({'animal': req.params.animal})
    if(!result) throw new Error('Invalid value');
    return result;
  });
}

module.exports = router;