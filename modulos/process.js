// const process = require('process');

process.on('beforeExit', () => {
    console.log('El proceso va a terminar');
});

process.on('exit', () => {
    console.log('Proceso culminado');
});

process.on('uncaughtException', (err, origen) => {
    console.log('Capturar el siguiente error: ')
    console.error(err)
})

punssd();
