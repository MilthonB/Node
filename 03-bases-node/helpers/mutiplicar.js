
const fs = require('fs');
const color = require('colors');



const crearArchivo = async (base = 5, listar = false) => {

    try {



        let salida = '';

        for (let i = 1; i <= 10; i++) {
            salida += `${base} ${'X'.green} ${i} ${'='.green} ${base * i}\n`;
        }

        if (listar) {

            console.log('=================='.green)
            console.log('   Tabla del '.green, color.red(base) )
            console.log('==================')

            console.log(salida)
        }

        // fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
        //     if(err) throw err
        //     console.log(`tabla-${base}`)
        // });

        fs.writeFileSync(`tabla-${base}.txt`, salida);

        return `tabla-${base}`.rainbow;

    } catch (error) {
        throw error;
    }



}

module.exports = {
    crearArchivo
}