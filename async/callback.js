function hola(nombre, callback){
    setTimeout(function(){
        console.log('Hola, ' + nombre);
        callback(nombre);
    }, 1000)
}

function adios(nombre, callback){
    setTimeout(function(){
        console.log('Adios, ' + nombre);
        callback();
    }, 1000)
}

console.log('Iniciando proceso');
hola('Carlos', function (nombre) {
    adios(nombre, function () {
        console.log('Terminando proceso')
    });
});