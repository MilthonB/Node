
const fs = require('fs');

console.clear();

console.log('==================')
console.log('   Tabla del 5   ')
console.log('==================')

let salida = '';
const base = 5;

for( let i = 1; i <= 10; i++ ){
    salida += `${base} X ${i} = ${base*i}\n`;
}

console.log(salida)

fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
    if(err) throw err
    console.log(`tabla-${base}`)
});