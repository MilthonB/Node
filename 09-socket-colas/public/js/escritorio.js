// Referencias HTML
const lblEscritorio = document.querySelector('h1');
const btnAtender = document.querySelector('button');

 const searchParams = new URLSearchParams(window.location.search); // obtener los parametros del url

 if( !searchParams.has('escritorio') ){ // si en los parametros recibidos no tiene el elemento escritorio  
    window.location = "index.html";
    throw new Error('El escritorio es obligatorio');
 }

 const escritorio = searchParams.get('escritorio'); // obtener lo que contiene el parametro escritorio;


 const socket = io();


socket.on('connect', () => {
    btnAtender.disabled = false;
});


socket.on('disconnect', () => {
    
    btnAtender.disabled = true;
});

// socket.on( 'ultimo-ticket', ( ultimo ) => {
//     lblNuevoTicket.innerText = "Ticket: "+ultimo;
// });



btnAtender.addEventListener( 'click', () => {

    // socket.emit('siguiente-ticket',null, (ticket) => {
    //     console.log('Hola mundo ', ticket);
    //     lblNuevoTicket.innerText = ticket;

    // })


});