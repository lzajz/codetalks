//importing read and write file from the 'fs" module 
const {readFile, writeFile} = require('fs');
//prints "start" into the console
console.log('start');
//readsfile of the the first.tect file and it reads it asynchronously 
readFile('./content/first.txt','utf8', (err, result)=> {
   if (err) {
       console.log(err);// prints error if there is an error 
       return 
   }
   //setting the firstTxt in variable 
   const first = result;
//prints out the info from the firstTXt
   console.log(result);
   // reads file from secondTXt asynchronously 
   readFile('./content/second.txt','utf8', (err, result)=> {
       if (err) {
           console.log(err);// prints err if there is an err 
           return 
       }
       // setting the secondTXT as a var 
       const second = result;
       console.log(result);// outputs info from the secondTXt
       //writes the new appended string to the file asynchrounsly 
       writeFile('./content/result-async.txt', `Here is the result : ${first}, ${second}`,(err, result) => {
           if (err) {
               console.log(err);// prints err if there is an err
               return 
           }
           console.log('done with the task');//prints string and and tells we can start a new task
       }
       );
    })
});


console.log('starting next task');// starting new task
