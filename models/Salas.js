// Spots = Salas
const mongoose = require('mongoose');

const SalasSchema = new mongoose.Schema({
    thumbnail: String,
    empresa: String,
    preco: Number,
    techs: [String], // [MySql, Html, CSS, Javascript]
    usuario: {
        type: mongoose.Schema.Types.ObjectId
    }
}, {
    // parametro para o Schema quando gerar o JSON desse objeto, criar o virtual automaticamente
    toJSON: {
        virtuals: true,
    }
});

// campo virtual criado para mostrar as imagens das Salas
SalasSchema.virtual('thumbnail_url').get( function (){
    return `http://localhost:3335/files/${this.thumbnail}`
})

module.exports = mongoose.model('Salas', SalasSchema)
