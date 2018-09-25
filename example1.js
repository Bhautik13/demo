var fs = require('fs');

//Asynchronously read file from local file manager
fs.readFile('./bhautik/input.txt',function (error, data){
  if(error){
    console.log('file can not access or something wrong');
  }
  if(data){
    console.log(data.toString());
  }
});

//Syncronously reading a file from local file manager
var data = fs.readFileSync('./bhautik/input.txt');

console.log(data.toString());
console.log('program Ended');
