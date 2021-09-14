

const online = document.querySelector('#online');
const offline = document.querySelector('#offline');
const txtMensaje = document.querySelector('#txtMensaje');
const btnEnviar = document.querySelector('#btnEnviar');

const socket = io(); // Para conectar al servidor 

socket.on('connect', () => {

    console.log('Conectado al servidor');

    online.style.display = '';
    offline.style.display = 'none';

});


socket.on('disconnect', () => {

    console.log('Desconectado del servidor');

    online.style.display = 'none';
    offline.style.display = '';
});

btnEnviar.addEventListener( 'click', () => {

    const mensaje = txtMensaje.value;
    
    const payload = {
        mensaje,
        id:'asd5641as65',
        fecha: new Date().getTime()
    }

    socket.emit('enviar-mensaje', payload);

})