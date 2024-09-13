const { checkJWT } = require('../helpers/jwt');
const { io } = require('../index');
const {loggedInUser,
    userDisconnected,
    saveMessages}=require('../controllers/socket');


// Mensajes de Sockets
io.on('connection', client => {
    console.log('Cliente conectado');
    
    const [check,uid]=checkJWT(client.handshake.headers['x-token']);
    if(!check){return client.disconnect();}
    loggedInUser(uid);
 
    client.join(uid);
    client.on('personal-message',async(payload)=>{
        await saveMessages(payload);
        io.to(payload.to).emit('personal-message',payload);
    }),


    client.on('disconnect', () => {
        userDisconnected(uid);
    });

    client.on('mensaje', ( payload ) => {
        console.log('Mensaje', payload);

        io.emit( 'mensaje', { admin: 'Nuevo mensaje' } );

    });


});
