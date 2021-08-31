



// setTimeout( function(){
//     console.log('Hola mundo')
// },1000 )

// setTimeout( () => {
//     console.log('Hola mundo')
// }, 1000)


//  callback = a una funcion que se manda como argumento a otra funcion

const getUsuarioByID = ( id, callback ) => {

    const  usuario = {
        id, 
        nombr: 'Lorenzo'
    }
    setTimeout( () => {
        callback(usuario)
    },1500 );
}


getUsuarioByID(10, ( usuario ) => {
    console.log(usuario);
})