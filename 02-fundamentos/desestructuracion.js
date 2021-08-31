

const deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    getNombre() {
        return `${this.nombre} ${this.apellido}`
    }
}


// const nombre = deadpool.nombre;
// const apellido = deadpool.apellido;
// const poder = deadpool.poder;
// console.log(nombre, apellido, poder);

let {nombre, apellido, poder} = deadpool; 

console.log(nombre, apellido, poder);