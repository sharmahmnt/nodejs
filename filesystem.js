const fs = require('fs')
// 
//async method
fs.readFile(__dirname+"/teacher.txt",'utf-8',(error,data)=>{
    console.log(data);
})
console.log("hello amit")