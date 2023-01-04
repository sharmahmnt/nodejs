// arrow function
// const user= (a,b)=>{
//     // console.log("hello itm");
//     console.log(a+b);
// }
// user(2,3);
// global object start
// __filename
// __direname
//   require
//   module
//   exports

// console.log(__filename)
// const data= require('./p2');
// console.log(data .a);
// console.log(data.b);
// console.log(data);
// data.addition();
const http= require('http');
const server= http.createServer(function(req,res){
    res.write('welcome non')
    res.end()
}).listen(3002,()=>console.log("server is running localhost:3002"))