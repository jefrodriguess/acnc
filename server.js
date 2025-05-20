const express = require("express");
const mongoose = require("mongoose");

const routes = require('./rotas');
const app = express();

async function startDatabase() {
    try {
        await mongoose.connect(`mongodb+srv://jefersonsilvarodriguess:Hotmail123@cluster-api.r4sn2.mongodb.net/datasocketio?retryWrites=true&w=majority&appName=Cluster-API`)
        console.log('Conectado ao MongoDB')
    } catch (error) {
        console.log('Erro ao conectar ao MongoDB', error.menssage);
        process.exit(1); //Encerra o processo se a conexão falhar 
    }
    
}
startDatabase().then(() => {
    
    app.get('/', (req, res) => {
        return res.json({mensagem: 'API ArCNC Rodando ...'})
    })
    
    
    const server = app.listen(3335, () => {
        console.log("Servidor rodando na porta 3335")
    })
});

