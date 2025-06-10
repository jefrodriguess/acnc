const Salas = require('../models/Salas');

const index = async (req, res) =>{
    const { usuario_id } = req.headers;

    const salas = await Salas.find({ usuario: usuario_id });

    return res.json(salas);

}

module.exports = { index }