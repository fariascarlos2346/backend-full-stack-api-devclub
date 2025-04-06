import { Router } from 'express';

const routes = new Router();

routes.get('/', (request, response) => {    //rota criada
    return response.status(200).json({ message: 'Hello World! Carlos H. e Bia'})
});

export default routes;