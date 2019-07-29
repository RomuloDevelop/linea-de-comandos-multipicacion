const opt = {
    base:{
        demand: true, //indica un parametro obligatorio
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
};

const argv = require('yargs')
.command('listar', 'Muestra en consola las tablas de multiplicar', opt)
.command('crear', 'Genera un archivo con las tablas de multiplicar',opt)
.help()
.argv;

module.exports = argv;