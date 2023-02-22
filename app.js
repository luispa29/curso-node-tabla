console.clear();
 require('colors')

const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs')


// const [,,arg3 = 'base=5'] = process.argv;
// const [,base = 5] = arg3.split('=');

crearArchivo(argv.b,argv.h, argv.l)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow))
    .catch(err => console.log(err));







