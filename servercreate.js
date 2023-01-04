const http= require('http');
// 
const server = http.createServer(function(req,res){
res.write('welcome to nodejs')
res.write('welcome to nodejs  world')
res.end()
}).listen(3000,()=> console.log("server is running localhost:3000"))