const http = require('http');
const petshop = require('./petshop');


const server = http.createServer((req, res) => {
    if (req.url == '/listaspets') {
        let resultado = petshop.listarPets();
        return res.end(resultado);
    }
    res.setHeader('Content-Type','text/html;charset=utf-8');
    res.end('Você está dentro do sistema pet-shop');
});

server.listen(3000, 'localhost', () => {
    console.log("Servidor iniciado!")
});