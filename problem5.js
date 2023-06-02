
// imported mysql module 
var mysql=require('mysql');


//createConnection is a function that is called on the mysql to create a connection
//to the mysql database
var connection=mysql.createConnection({
//connection details:
  host:'localhost',
  user:'your username',
  password:'your password',
  database:'your database name'
  // ^a must to establish a connection
});
//connect metod// initiates the connection
connection.connect(function(error){
  if(!!error){
    console.log(error);// if err then err will be printed into the console
  }else{
    console.log('Connected!:)');// if no err the message "connected! " will be printed into the console
    
  }
}); 
