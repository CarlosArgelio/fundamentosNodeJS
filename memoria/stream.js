const fs = require('fs');
const stream = require('stream');
const util = require('util');

let data = '';

let readableStream = fs.createReadStream(__dirname + '/input.txt')

// readableStream.setEncoding('utf-8')
// readableStream.on('data', function (chunck) {
//     data += chunck;
// });

// readableStream.on('end', function() {
//     console.log(data);
// });

// process.stdout.write('Hola')
// process.stdout.write('Que tal')

const Transform = stream.Transform;

function Mayus() {
    Transform.call(this);
}
util.inherits(Mayus, Transform);

Mayus.prototype._transform = function(chunck, codif, cb) {
    chunckMayus = chunck.toString().toUpperCase();
    this.push(chunckMayus);
    cb();
}

let mayus = new Mayus();

readableStream.pipe(mayus).pipe(process.stdout);

