//Referencia
const txtUid = document.querySelector('#txtUid');
const txtMensaje = document.querySelector('#txtMensaje');
const ulUsuarios = document.querySelector('#ulUsuarios');
const ulMensajes = document.querySelector('#ulMensajes');
const btnSalir = document.querySelector('#btnSalir');

const url = (window.location.hostname.includes('localhost'))
    ? 'http://localhost:4500/api/auth/'
    : ''



let usuario = null;
let socket = null;

const validarJWT = async () => {

    const token = localStorage.getItem('token') || '';

    if (token.length <= 10) {
        throw new Error('Token no existente')
    }

    const resp = await fetch(url, {
        headers: { 'x-token': token }
    });

    const { usuario: userDB, token: tokenDB } = await resp.json();

    localStorage.setItem('token', tokenDB);
    usuario = userDB;
    document.title = usuario.nombre;

    await conectarSocket();
}

const conectarSocket = async () => {

    socket = io({
        'extraHeaders': {
            'x-token': localStorage.getItem('token')
        }
    });

    socket.on('connect', () => {
        console.log('Sockets Online');
    });

    socket.on('disconnect', () => {
        console.log('Sockets Offline');
    });

    socket.on('usuarios-activos', () => {
        // TODO:
    });

    socket.on('recibir-mensaje', () => {
        // TODO:
    });

    socket.on('mensaje-privados', () => {
        // TODO:
    });

}


const main = async () => {

    await validarJWT();

}

main();

// const socket = io();

