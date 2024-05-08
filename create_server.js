const http = require('http');
http.createServer((req,res)=>{
    res.write('<h1>This is first server Node with Arrow Functions</h1>');
    res.end();
}).listen(4500);