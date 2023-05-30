const fs = require('fs');

function leer(ruta, cb) {
    fs.readFile(ruta, (err, data) => {
        cb(data.toString());
    })
}

function escribir(ruta, contenido, cb) {
    fs.writeFile(ruta, contenido, function (err) {
        if (err) {
            console.log('No he podido escribirlo', err);
        } else {
            console.log('Se ha escrito correctamente');
        }
    });
}

function borrar(ruta, cb) {
    fs.unlink(ruta, function (err) {
        cb(err ? 'No se puede borrar' : 'Se ha borrado correctamente');
    });
}

borrar(__dirname + '/archivo1.txt', console.log)
// escribir(__dirname + '/archivo1.txt', 'Soy un nuevo archivo', console.log)
// leer(__dirname + '/archivo.txt', console.log) 