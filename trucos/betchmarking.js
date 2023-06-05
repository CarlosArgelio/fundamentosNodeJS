let suma = 0;

console.time('Funciones')
console.time('bucle');
for (let i = 0; i < 100000; i++) {
    suma += 1;
}
console.timeEnd('bucle');

console.time('Asincrono')
console.log('Empieza proceso asincrono')
asincrona()
    .then( () => {
        console.timeEnd('Asincrono');
    });

console.timeEnd('Funciones')


function asincrona() {
    return new Promise( (resolve) => {
        setTimeout(function () {
            console.log('Termina el proceso asincrono');
            resolve
        })
    })
}
