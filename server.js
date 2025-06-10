require('dotenv').config(); 
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")

const path = require("path");        

const routes = require('./routes');

const app = express();
// Habilita o parser de JSON em todas as rotas
app.use(express.json())

app.use(cors())

app.get('/', (req, res) =>{
    return res.send('API AirCNC Rodando ...')
})

//Rota de teste rápida
app.get('/ping', (req, res) => {
  console.log('🔔 recebeu ping');
  res.send('pong');
});

// Registra as rotas da aplicação
// - a partir deste ponto, qualquer requisição irá passar pelo seu router (routes.js)
// Por que o app.use(routes) aqui?
// Deve vir após o express.json(), para que o body já seja convertido em objeto JavaScript.
// Registra todas as sub-rotas definidas em index.js.
app.use(routes)

app.use('/files', express.static(path.resolve(__dirname, 'uploads')));

async function startDatabase(){
    const { DB_USER, DB_PASS, DB_CLUSTER, DB_NAME } = process.env;

    const uri = `mongodb+srv://${DB_USER}:${DB_PASS}@cluster-api.r4sn2.mongodb.net/${DB_NAME}?retryWrites=true&w=majority&appName=Cluster-API`;
    // await mongoose.connect('mongodb+srv://login:senha@omnistack9.qwkirlk.mongodb.net/dataArcnc?retryWrites=true&w=majority&appName=omnistack9');
    try {
        await mongoose.connect(uri);
        console.log('Conectado ao MongoDBAtlas')
    } catch (error) {
        console.error(' Erro ao conectar ao MongoDB: ', error.message);
        process.exit(1); // Encerra o processo se a conexão falhar
    }
}

startDatabase().then( () => {
    
    const port = process.env.PORT || 3335
    const server = app.listen(port, () => {
        console.log(`Servidor rodando na porta ${port}`)
    })

})


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