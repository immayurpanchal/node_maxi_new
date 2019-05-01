const http = require("http");

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Node Practice</title></head>');
    res.write('<body><h1>This is response from Node.js server</h1></body>');
    res.end();
});

server.listen(3000);
