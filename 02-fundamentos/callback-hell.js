const empleados = [
    {
        id: 1,
        nombre: 'Fernando'
    },
    {
        id: 2,
        nombre: 'Linda'
    },
    {
        id: 3,
        nombre: 'Karen'
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
    } )

    if( idEmpledo ) {
        callback(null, idEmpledo);
    }else{
        callback(`Empleado con id ${ id } no existe`);
    }

}


getEmpleado( 31, ( err, empleado ) => {
    if( err ){
        console.log('Error!');
        return console.log(err);
    }
    console.log('Empleado existe!');
    console.log(empleado);
});
