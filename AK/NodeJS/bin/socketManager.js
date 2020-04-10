const io = require('./www')
var nsp = io.of('/chat');
nsp.on('connection', function(socket) {
    console.log('someone connected '+socket.id); 
    socket.emit('hi', 'Hello everyone!');
    socket.on('data', function(socket) {
      console.log(socket);
    });
 });
