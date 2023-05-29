let i = 0;
let intervalo = setInterval(function () {
    console.log('Iniciando ejecucion')
    if (i === 3) {
        clearInterval(intervalo);
    }
    i++;
}, 1000);