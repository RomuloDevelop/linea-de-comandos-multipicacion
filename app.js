const argv = require('./config/yargs');
const colors = require('colors');

const {crearArchivo, listarTabla} = require('./multiplicar/multiplicar');

let comando = argv._[0]; //Tomo solo el primer comando listado en el objeto argv
const {base, limite} = argv;

switch(comando) {
    case 'listar':
        listarTabla(base, limite);
        break;
    case 'crear':
        crearArchivo(base, limite)
            .then(archivo => console.log(`Archivo creado: ${ archivo }`))
            .catch(err => console.log(err));
        break;
    default: 
        console.log('Comandos no encontrados');
}
