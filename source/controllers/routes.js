const dbRoutes = require('../storage/routes')


async function getRoutes(){
    return await dbRoutes.findAll()
}

async function addRoute(route){
    return dbRoutes.addRoute(route);
}

module.exports = {
    getAllRoutes: getRoutes,
    addRoute
}