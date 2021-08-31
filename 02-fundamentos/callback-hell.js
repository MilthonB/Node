const empleados = [
    {
        id: 1,
        nombre: 'Lorenzo'
    },
    {
        id: 2,
        nombre: 'Samarripa'
    },
    {
        id: 3,
        nombre: 'Tunco'
    }
];


const salarios = [
    {
        id: 1,
        salario: 1500
    },
    {
        id: 2,
        salario: 2500
    }
];


const getEmpleado = ( id, callback ) => {
    const idEmpledo = empleados.find( (e) => {
            return e.id === id;
    } )?.nombre;

    if( idEmpledo ) {
        callback(null, idEmpledo);
    }else{
        callback(`Empleado con id ${ id } no existe`);
    }
}

const getSalario = ( id, callback ) => {

    const salario = salarios.find( s => s.id === id)?.salario;

    if( salario ){
        callback( null, salario );
    }else{
        callback(`El salario con el id de empleado ${id} no existe` );
    }

}


getEmpleado( 1, ( err, empleado ) => {
    if( err ){
        console.log('Error!');
        return console.log(err);
    }
   

    getSalario( 1, (err, salario) => {

        if( err ){
            console.log('Hubo un error');
            return console.log(err)
        }
    
        console.log(`El empelado ${empleado} tiene un salario ${salario}`);
    
    })

});

