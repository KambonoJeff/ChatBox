const path = require('path');
const httpp =require('http');
const express = require('express');
const socketio = require('socket.io');
const format = require('./utils/message');

const app = express();
const server = httpp.createServer(app);
const io = socketio(server);


app.use(express.static(path.join(__dirname, 'public')));

const botname = 'chatbot';

io.on('connection',socket => {
    console.log('New connections recieved');
    socket.emit('message', format(botname,  'Welcome to the Chatbox By KAMBONO'));
    socket.broadcast.emit('message', format(botname, 'User has joined the chat'));
  
  
    socket.on('disconnect', () =>{
        io.emit('message', format(botname, 'User has left the group'));
    });
    socket.on('chatmessage', (msg) => {
        io.emit('sendermessage', format('user',  msg));
       
    });
    
});

const PORT = 3000 || process.env.PORT;
server.listen(PORT, () => console.log(`Server started at  ${PORT}`));