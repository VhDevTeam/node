const http = require('http');
const app = require('./app.js'); // calling other file
const msg = require('./fruits.js');
//const fs = require('fs'); // import from core nodejs modules internal
const fsw = require('fs').writeFileSync;
let fruits = ['Apple','Orange','Mango'];
//console.warn(fruits);
console.log(app.getUser());
console.log(msg.myMessage);
fsw('vidu.txt',"Hello world Thuzi");
console.log(__dirname);
console.log(__filename);
http.createServer((req,res)=>{
    res.write('<h1>Hello World NodeJs !</h1>');
    res.end();
}).listen(1000);