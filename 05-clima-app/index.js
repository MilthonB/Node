const {leerInput} = require('./helpers/inquire')
 




const main = async() => {
    const texto = await leerInput('Carga algo');
    console.log(texto);

}


main();