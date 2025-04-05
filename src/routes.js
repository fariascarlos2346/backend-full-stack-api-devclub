const { Router } = require('express');

const routes = new Router();

routes.get('/', (request, response) => {    //rota criada
    return response.status(200).json({ message: 'Hello World! Carlos e Bia'})
});

module.exports = routes;