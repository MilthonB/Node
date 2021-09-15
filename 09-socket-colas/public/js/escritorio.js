// Referencias HTML
const lblEscritorio = document.querySelector('h1');
const btnAtender = document.querySelector('button');
const atenderSmall = document.querySelector('small');
const divAlert = document.querySelector('.alert');
const lblPendientes = document.querySelector('#lblPendientes');

 const searchParams = new URLSearchParams(window.location.search); // obtener los parametros del url

 if( !searchParams.has('escritorio') ){ // si en los parametros recibidos no tiene el elemento escritorio  
    window.location = "index.html";
    throw new Error('El escritorio es obligatorio');
 }

 const escritorio = searchParams.get('escritorio'); // obtener lo que contiene el parametro escritorio;

 divAlert.style.display = 'none';


 const socket = io();


socket.on('connect', () => {
    btnAtender.disabled = false;
});


socket.on('disconnect', () => {
    
    btnAtender.disabled = true;
});


socket.on( 'tickets-pendientes', ( pendientes ) => {
    lblPendientes.innerText = pendientes; 
});

// socket.on( 'ultimo-ticket', ( ultimo ) => {
//     lblNuevoTicket.innerText = "Ticket: "+ultimo;
// });



btnAtender.addEventListener( 'click', () => {

    socket.emit( 'antender-ticket',{ escritorio }, ( { ok, msg, ticket  } ) => {
       
        if( !ok ){
            atenderSmall.innerText = 'Nadie.'
            divAlert.style.display = '';
        }else{
            atenderSmall.innerText = `Ticket número: ${ticket.numero}`;
        }



    })

    
    // socket.emit('siguiente-ticket',null, (ticket) => {
    //     console.log('Hola mundo ', ticket);
    //     lblNuevoTicket.innerText = ticket;

    // })


});