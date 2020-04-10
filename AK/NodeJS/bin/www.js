#!/usr/bin/env node

/**
 * Module dependencies.
 */

var app = require('../app');
var debug = require('debug')('myapp:server');
var http = require('http');
var PORT = process.argv[2] && process.argv[2].slice(-4)

/**
 * Get port from environment and store in Express.
 */

var port = normalizePort(process.env.PORT || PORT || '3002');
app.set('port', port);

/**
 * Create HTTP server.
 */

var server = http.createServer(app);
const io = module.exports.io = require('socket.io')(server);
var nsp = io.of('/chat');
const Bookmarking = require('../models//Bookmark');
nsp.on('connection', function (socket) {
  console.log('someone connected ' + socket.id);
  socket.emit('hi', 'Hello everyone!');
  let bookmarkIs=false;
  socket.on('data', function (socket) {
    if(!bookmarkIs){
      bookmarkIs=true;
      Bookmarking.updateBookmarkById(socket, function (error, res_) {
        if (error) return next(err)
        if (res_) {
          bookmarkIs=false;
        } else {
          bookmarkIs=false;
        }
      })
    }
  });
});

// io.on('connection', socketManager);
/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  console.log(`server listening on ${addr.port}`);

  debug('Listening on ' + bind);
}
