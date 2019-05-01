const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Node Practice</title></head>");
    res.write(
      "<body><form action='/message' method='POST'><input type='text' name='message'/><button type='submit'>Submit</button></form></body>"
    );
    return res.end();
  }

  if(req.url === '/message' && req.method === 'POST'){
      const body = [];
      req.on('data', (chunk) => {
          body.push(chunk); //Chunk is unreadable data in int form 
      });

      req.on('end', () => {
          const parsedBody = Buffer.concat(body).toString(); //chunk is readable 
          const message = parsedBody.split('=')[1];
          fs.writeFileSync('msg.txt', message);
      });
      res.statusCode = 302;
      res.setHeader('location', '/');
      return res.end();
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Node Practice</title></head>");
  res.write("<body><h1>This is response from Node.js server</h1></body>");
  res.end();
});

server.listen(3000);
