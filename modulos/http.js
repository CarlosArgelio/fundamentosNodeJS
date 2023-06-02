const http = require('http');

http.createServer(router).listen(3003);

function router(req, res) {
    console.log('Nueva peticion!');
    console.log(req.url);

    switch (req.url) {
        case '/hola':
            res.write('Hola que tal');
            res.end();
            break
        default:
            res.write('Error 404');
            res.end();
    }

    // res.writeHead(201, { 'Content-Type': 'text/plain' })

    // //Escribir respuesta al usuario
    // res.write('Hola estoy usando http de nodeJs')

    // res.end();
}

console.log("Escuchando http en el puerto 3003")