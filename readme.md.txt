// Fluxo de carregamento
// server.js chama require("./routes").

// index.js 
// Sessao.routes.js
// faz require("../controllers/Sessao.Controller").

// SessaoController.js faz require("../models/Usuario").

// Usuario.js registra o Schema e retorna o Model.

// Volta para Sessao.Controller.store, que já possui o Model disponível.

// Volta para Sessao.routes.js, que agora monta a rota /sessao apontando para store.

// Em server.js, app.use(routes) registra tudo isso no Express.

// caso algum problema da porta, mate a porta e comece novamente
// netstat -ano | findstr :3335
// taskkill /PID <pid> /F