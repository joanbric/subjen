async function router(fastify, options) {
  fastify.get("/", async (request, response) => {
    return "world";
  });
}

module.exports = router;
