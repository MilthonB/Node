
const fs = require('fs');
const color = require('colors');



const crearArchivo = async (base = 5, listar = false, hasta = 10) => {

    try {



        let salidaTerminal, salida = '';

        for (let i = 1; i <= hasta; i++) {
            salida += `${base} X ${i} = ${base * i}\n`;
            salidaTerminal += `${base} ${'X'.green} ${i} ${'='.green} ${base * i}\n`;
        }

        if (listar) {

            console.log('=================='.green)
            console.log('   Tabla del '.green, color.red(base) )
            console.log('==================')

            console.log(salidaTerminal)
        }

        // fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
        //     if(err) throw err
        //     console.log(`tabla-${base}`)
        // });

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        return `tabla-${base}`.rainbow;

    } catch (error) {
        throw error;
    }



}

module.exports = {
    crearArchivo
}