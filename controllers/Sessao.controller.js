const Usuario = require('../models/Usuarios');


const store = async (req, res) =>{
    const { email } = req.body

    let usuario = await Usuario.findOne({ email });
    
    if (!usuario) {
        usuario = await Usuario.create({ email});
    }
    return res.json(usuario)
}

module.exports = { store }

// module.exports = {
//     async store(req, res){
//         const { email } = req.body
//         // ...
//         usuario = await Usuario.create({ email});

//         return res.json(usuario)
//     }
// };
