
const http = require('http');
const server = http.createServer();
const { createReadStream,fs } = require('fs');

server.on('request', (req,res)=>{
    fs.createReadStream('index.html').pipe(res);   
})

server.listen(8080);




