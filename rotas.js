//index() listagem de sessões
//show() lista 1 sessão
//store() cria 1 sessão
//update() altera 1 sessão
//destroy() exclui uma sessão

const express = require('express');
const routes = express.Router();

routes.post('/sessao', Sessao.controller.store)