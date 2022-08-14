const express = require('express');
const path = require('path');

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

let messages = [];
io.on('connection', socket => {
    console.log('Socket conectado', socket.id)

    socket.on('sendMessage', data => {
        messages.push(data);
        console.log(data)
        socket.broadcast.emit('receivedMessage', data);
    });

    socket.on("connect_error", (err) => {
        console.log(`connect_error due to ${err.message}`);
      });
})

server.listen(3000);