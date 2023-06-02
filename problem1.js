
//in this line of code we are importng "readfilesync" and "writefilesync" functions from the "fs" module which 
//is a built in module in NODE. These two functions allow synchrounous file reading and writing operations
const {readFileSync, writeFileSync} = require('fs');


//here we are importing the entire FS module, helpful to have when you need to use other functions that the 
//fs module offers
const fs = require('fs');


//setting two variables with reading the information of two files: the first and second text that is in the 
//content file
const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')

//this prints the two variables that we set that read the info of the two files,therefor it will print the info
console.log(first, second);


writeFileSync('./content/result-sync.txt', `Here is the result : ${first}, ${second}`);


writeFileSync('./content/result-sync.txt', `Here is the result : ${first}, ${second}`,{flag: 'a'});