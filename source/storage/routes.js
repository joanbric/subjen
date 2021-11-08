const routes_model = require('../models/routes_model')
async function findAll(){
    let result;
    await routes_model.find().exec((err, routes) => {
      if (err) throw new Error(err)

      result = routes
      console.log(routes)
    });
    console.log(result)
    return result;
}


async function addRoute(route){
    const newRoute = new routes_model(route);
    newRoute.save((err) => {
      if (err) return console.error(err)
    })

    return 'done'
}

module.exports = {
    findAll,
    addRoute
}