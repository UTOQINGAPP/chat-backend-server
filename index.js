const express = require('express');
const path = require('path');
const cors = require('cors');
require('dotenv').config();

//DB Config
const {dbConnection}=require('./database/config');
dbConnection();


// App de Express
const app = express();

// Lectura y parseo del body
app.use(express.json());

// Node Server
const server = require('http').createServer(app);
module.exports.io = require('socket.io')(server);
require('./sockets/socket');




// Path público
const publicPath = path.resolve( __dirname, 'public' );
app.use( express.static( publicPath ) );
app.use(cors({
    origin: '*'
  }));

//Mis rutas
app.use('/api/login',require('./routes/auth'));
app.use('/api/users',require('./routes/users'));
app.use('/api/messages',require('./routes/messages'));



server.listen( process.env.PORT, ( err ) => {

    if ( err ) throw new Error(err);

    console.log('Servidor corriendo en puerto', process.env.PORT );

});


