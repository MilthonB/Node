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

    socket.on('usuarios-activos', ( payload ) => {
        dibujarUsuarios(payload);
    });

    socket.on('recibir-mensaje', ( payload ) => {
        dibujarMensaje(payload);
    });

    socket.on('mensaje-privados', () => {
        // TODO:
    });

}

const dibujarMensaje = ( mensajes = []) => {

    let mensajeHTML = '';
    mensajes.forEach(({ nombre, mensaje }) => {
        mensajeHTML  += `

            <li>
                <p>
                    <spam class="text-danger"> ${nombre} </spam>
                    <spam> ${mensaje} </spam>
                </p>
            </li>


        `
    });
    ulMensajes.innerHTML = mensajeHTML;

}

const dibujarUsuarios = ( usuario = []) => {

    let usersHTML = '';
    usuario.forEach(({ nombre, uid }) => {
        usersHTML  += `

            <li>
                <p>
                    <h5 class="text-success"> ${nombre} </h5>
                    <spam class="fs-6 text-muted" > ${uid} </spam>
                </p>
            </li>


        `
    });
    ulUsuarios.innerHTML = usersHTML;

}


txtMensaje.addEventListener( 'keyup', ( {keyCode} ) => {
    
    const mensaje = txtMensaje.value;

    if( keyCode !== 13 ){return;}
    if(mensaje.length === 0){return;}

    
    socket.emit('enviar-mensaje', {mensaje});

} );


const main = async () => {

    await validarJWT();

}

main();

// const socket = io();

