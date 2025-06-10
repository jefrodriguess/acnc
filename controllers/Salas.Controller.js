const Salas = require('../models/Salas');
const Usuarios = require('../models/Usuarios');

const store = async (req, res) =>{
    const { empresa, preco, techs } = req.body;
    const { usuario_id } = req.headers;
    const { filename } = req.file

    console.log(req.body);
    console.log(req.file);
    console.log(req.headers);

    // consultado o usuário na base de Usuário
    const usuario = await Usuarios.findById(usuario_id);
    if(!usuario){
        return res.status(400).json({error: 'Usuário não existe '});
    }

    const sala = await Salas.create({
        usuario: usuario_id,
        thumbnail: filename,
        empresa,
        techs: techs.split(',').map(tech => tech.trim()),
        preco,
    })

    
    return res.json(sala)
}

module.exports = { store }