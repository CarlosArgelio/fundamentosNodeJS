const http = require('http');

http.createServer(router).listen(3003);

function router(req, res) {
    console.log('Nueva peticion!');
    console.log(req.url);

    switch (req.url) {
        case '/':
            // res.write('<h1>Hola</h1>');
            res.end('<h1>Hola</h1>');
            break
        default:
            res.write('Error 404: Url not found');
            res.end();
    }

    // res.writeHead(201, { 'Content-Type': 'text/plain' })

    // //Escribir respuesta al usuario
    // res.write('Hola estoy usando http de nodeJs')

    // res.end();
}

console.log("Escuchando http en el puerto 3003")