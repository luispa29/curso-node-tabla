const fs = require('fs');
const colors = require('colors')


const crearArchivo = async (base = 5, hasta , listar ) => {
    // return new Promise((resolve,reject)=>{
    //     console.log('==============================')
    //     console.log(`Tabla del ${base}`)
    //     console.log('==============================')
    //     let resultados = '';
    //     for (let i = 1; i <= 10; i++) {

    //         resultados += `${base} x ${i} = ${base * i}\n`
    //     }
    //     fs.writeFileSync(`Tabla del ${base}.text`, resultados);
    //     resolve(`Tabla del ${base}.text creada`)

    // })
    try {
        let resultados = '';
        let consola = '';
        for (let i = 1; i <= hasta; i++) {

            resultados += `${base} x ${i} = ${base * i}\n`
            
            consola += `${base} ${'x '.green }${i} ${'= '.red} ${base * i}\n`
        }
        fs.writeFileSync(`./salida/Tabla del ${base}.txt`, resultados);

        if (listar){
            console.log('=============================='.green)
            console.log(`       Tabla del`.green,colors.blue(base))
            console.log('=============================='.green)
            console.log(consola)
        }

        return (`Tabla del ${base}.text creada`)
    }
    catch (error) {
        throw error;
    }
}
module.exports = {
    crearArchivo
}