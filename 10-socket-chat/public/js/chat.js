

const url = (window.location.hostname.includes('localhost'))
? 'http://localhost:4500/api/auth/'
: ''



let usuario = null;
let socket = null;

const validarJWT = async() => {

    // console.log('entro al validar');
    const token = localStorage.getItem('token') || '';
    console.log(token);

    if( token.length <= 10 ){
        throw new Error('Token no existente')
    }

    const resp = await fetch(url,{
        headers: {'x-token': token}
    });

    const { usuario: userDB, token: tokenDB } = await resp.json();

    localStorage.setItem('token',tokenDB);
    usuario = userDB;
    document.title = usuario.nombre;

    await conectarSocket();
} 

const conectarSocket = async () => {
    
    const socket = io({
        'extraHeaders': { 
          'x-token': localStorage.getItem('token')
        }
      });

}


const main = async() => {

    await validarJWT();

}

main();

// const socket = io();

