const express = require('express'); //importando o EXPRESS
const routes = require('./routes');

class App {         //criando as CLASS e suas configurações
    constructor() {     //primeiro METODO
        this.app = express();

        this.middlewares();
        this.routes();
    }

    middlewares() {     //segundo METODO
        this.app.use(express.json());
    }

    routes() {      //terceiro METODO
        this.app.use(routes);
    }
}

module.exports = new App().app;     //estanciando a CLASS e retornando o APP diretos.