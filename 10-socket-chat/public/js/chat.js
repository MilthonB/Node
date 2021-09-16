

const url = (window.location.hostname.includes('localhost'))
? 'http://localhost:4500/api/auth/'
: ''



const usuario = null;
const socket = null;

const validarJWT = async() => {

    const token = localStorage.getItem('token') || '';

    if( token.length <= 10 ){
        throw new Error('Token no existente')
    }

    const resp = await fetch(url,{
        headers: {'x-token': token}
    });

    const { usuario: usuarioDB, token: tokenDB } = await resp.json();

    console.log(usuarioDB, tokenDB);

 

} 


const main = async() => {

    await validarJWT();

}

main();

// const socket = io();

