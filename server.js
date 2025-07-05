const fs = require('fs');
const http = require('http');
const path = require('path');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        const filePath = path.join(__dirname, 'public', 'index.html');
        const readStream = fs.createReadStream(filePath);
        res.writeHead(200, { 'Content-Type': 'text/html' });
        readStream.pipe(res);
    } else if (req.url === '/styles.css') {
        const filePath = path.join(__dirname, 'public', 'styles.css');
        const readStream = fs.createReadStream(filePath);
        res.writeHead(200, { 'Content-Type': 'text/css' });
        readStream.pipe(res);
    } else if (req.url === '/about') {
        const filePath = path.join(__dirname, 'public', 'about.html');
        const readStream = fs.createReadStream(filePath);
        res.writeHead(200, { 'Content-Type': 'text/html' });
        readStream.pipe(res);
    } else {
        const readStream = fs.createReadStream('./public/404.html');
        res.writeHead(404, { 'Content-Type': 'text/html' });
        readStream.pipe(res);
    }
})

server.listen(3000);