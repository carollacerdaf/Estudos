const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server);

let messages = [];
io.on('connection', socket => {
    console.log('Socket conectado', socket.id)
    socket.emit("hello", {author: 'ChatBot', message: 'Seja bem vindo!'});

    socket.on('sendMessage', data => {
        messages.push(data);
        socket.broadcast.emit('receivedMessage', data);
    });

    socket.emit('previousMessages', messages);
})

server.listen(3000);