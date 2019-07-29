const fs = require('fs');
const colors = require('colors');

const iterator = (base, limite, cb)=>{
    console.log(`********Tabla del ${base} hasta el ${limite}********`.green)

    for( let i = 1; i<= limite; i++){
        cb(i);
    }
}


let listarTabla = (base, limite = 10)=>iterator(base, limite, index => {
        console.log(`${base} * ${index} = ${base*index}\n`);
})

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject)=>{

        if( !Number(base) ){
            reject(`La base '${base}' no es un numero`);
            return;
        }

        let data = '';
        iterator(base, limite, index=> data += `${base} * ${index} = ${base*index}\n`);
       
        fs.writeFile(`tablas/tabla-${base}.txt`, data,(err)=>{
            if(err) reject(err);
            else resolve(`tabla-${base}.txt`);
            console.log(`El archivo tabla-${base}.txt ha sido creado`.blue);
        });
    })
}

module.exports = {
    listarTabla,
    crearArchivo
};
