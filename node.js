//jshint esversion:6

const express = require ("express");
const bodyParser = require ("body-parser");
const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {  
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
})

const upload = multer({storage});

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.post("/", upload.single('foto'), function(req, res) {
    
    console.log(req.file , req.body)

    /*var nome = req.body.nome;
    var mat = req.body.mat;
    var email = req.body.email;
    var data = req.body.data;
    var end = req.body.end;
    var tipo = req.body.tipo;
    var foto = req.body.foto;
    var tel = req.body.tel;

    console.log(nome);
    console.log(mat);
    console.log(email);
    console.log(data);
    console.log(end);
    console.log(tipo);
    console.log(foto);
    console.log(tel);
    */
   
   if (req.file) return res.send("<h2>Usuário cadastrado com sucesso!</h2>");
   return res.send('<h2>Houve erro no upload!</h2>');
    
})

app.get("/" , function(req, res) {
    res.sendFile(__dirname + "/index_copy.html");
})

app.listen(3000, function() {
    console.log("Server started on port 3000");
});
