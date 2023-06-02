function error() {
    return 3 + z
}


try {
    error()
} catch(err) {
    console.log('Hay un error: ' + err.message)
}

console.log('Esto esta al final')