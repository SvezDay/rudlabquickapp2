const express = require('express');
const http = require('http');
const pj = require('path').join;
const favicon = require('serve-favicon');

const app = express();

app.use(express.static(pj(__dirname, '/dist')));
// app.use(favicon('/favicon.ico'));

app.get('/*', (req, res)=>{
  res.sendFile(pj(__dirname, '/dist/index.html'));
});

const port = process.env.PORT || 4200;
app.set('port', port);

const server = http.createServer(app);
server.listen(port, ()=>{console.log('Running on the port 4200')});
