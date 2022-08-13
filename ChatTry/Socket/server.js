const express = require('express');
const path = require('path');

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

/*app.use(express.static(path.join(__dirname, '../ChatApp')));
app.set('views', path.join(__dirname, '../ChatApp'));
app.engine('js');
app.set('view engine', 'js')
app.use('/', (req, res)=> {
    res.render('App.js');
})*/

io.on('connection', socket => {
    console.log('Scoket conectado', socket.id)

    socket.on('sendMessage', data => {
        console.log(data)
    })
})

server.listen(3000);