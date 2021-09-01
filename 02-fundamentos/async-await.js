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


const getEmpleado = (id,) => {

    return new Promise((resolve, reject) => {

        const empleado = empleados.find(e => e.id === id)?.nombre;

        (empleado)
            ? resolve(empleado)
            : reject(` El empleado con el id ${id} no existe `)

    });

}

const getSalario = (id) => {

    return new Promise((resolve, reject) => {

        const salario = salarios.find(e => e.id === id)?.salario;

        (salario)
            ? resolve(salario)
            : reject(` El salario con el id ${id} no existe `)

    });

}


const getInfUsuario = async (id) => {

    try {

        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);

        return `El empleado ${empleado} tiene un salario de ${salario}`

    } catch (error) {
        throw error;
    }

}

getInfUsuario(2)
        .then( msg => console.log(msg) )
        .catch(err => console.log(err))


