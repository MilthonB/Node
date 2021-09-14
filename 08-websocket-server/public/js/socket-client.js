

const online = document.querySelector('#online');
const offline = document.querySelector('#offline');


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