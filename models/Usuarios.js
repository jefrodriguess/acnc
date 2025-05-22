const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
    email: {
        type: String,
        require: true,
        unique: true,
    }
});

module.exports = mongoose.model('Usuario', UsuarioSchema)