const fs = require('fs');
const http = require('http');

http.createServer((req, res) => {
    if (req.url === '/') {
        const readStream = fs.createReadStream('./public/index.html');
        res.writeHead(200, { 'Content-Type': 'text/html' });
        readStream.pipe(res);
    } else if (req.url === '/styles.css') {
        const readStream = fs.createReadStream('./public/styles.css');
        res.writeHead(200, { 'Content-Type': 'text/css' });
        readStream.pipe(res);
    } else if (req.url === '/about') {
        const readStream = fs.createReadStream('./public/about.html');
        res.writeHead(200, { 'Content-Type': 'text/html' });
        readStream.pipe(res);
    } else {
        const readStream = fs.createReadStream('./public/404.html');
        res.writeHead(404, { 'Content-Type': 'text/html' });
        readStream.pipe(res);
    }
}).listen(3000);