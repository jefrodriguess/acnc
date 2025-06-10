const multer = require("multer");
const path = require("path");

module.exports = {
    // storage é como vai armazenar
    // multer.diskStorage é a gravação no disco
    // destination, em qual pasta vai salvar
    // path é o caminho e o resolve troca a / para o sistema operacional,
    // __dirname, variavél global que usa a pasta atual
    // filename() é um função e montar o nome do arquivo, como quero gravar
    // cb é afunção que chamo assim que tiver o nome definido
    storage: multer.diskStorage({
        destination: path.resolve(__dirname, '..', 'uploads'),
        filename:(req, file, cb) =>{
            const ext = path.extname(file.originalname);
            const name = path.basename(file.originalname, ext);

            cb(null, `${name}-${Date.now()}${ext}`)
        },
    }),
}