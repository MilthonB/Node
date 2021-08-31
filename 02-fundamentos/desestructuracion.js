

const deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    // edad: 50,
    poder: 'Regeneracion',
    getNombre() {
        return `${this.nombre} ${this.apellido}`
    }
}


// const nombre = deadpool.nombre;
// const apellido = deadpool.apellido;
// const poder = deadpool.poder;
// console.log(nombre, apellido, poder);

// let {nombre, apellido, poder, edad = 0} = heroe; 
    
//     console.log(nombre, apellido, poder, edad);


function imprimeHeroe( { nombre, apellido, poder, edad = 0 } ){
    
    // const {nombre, apellido, poder, edad = 0} = heroe; 
    
    console.log(nombre, apellido, poder, edad);


}


// imprimeHeroe(deadpool);

const heroes = ['DeadPool', 'SuperMan', 'Batman'];


// const h1 = heroes[0];
// const h2 = heroes[1];
// const h3 = heroes[2];

// console.log(h1);
// console.log(h2);
// console.log(h3);


const [ h1,h2,h3 ] = heroes;
const [ ,,h3S ] = heroes;
console.log(h1,h2,h3);
console.log(h3S);
