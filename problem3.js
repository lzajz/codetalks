//an arrow function that has a http request object that is created and assigned 
//to the request variable
const getTodos = () => {
    const request = new XMLHttpRequest();
   
   //event happens when the state of the request changes

   request.addEventListener('readystatechange', ()=>{
   
   //if the request is 4 and the status is 200, it was successful 
    if(request.readyState === 4 && request.status ===200){
      console.log(request.responseText)// logs response text of the reuqest into the console if status is 200
       }
       //if status is not 200 it will log "could not fetch data "
      else if (request.readyState === 4){
        console.log('could not fetch the data');
      }
   });
   
   //open method//get method- retrieves data //where the request will be sent 
   request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
   //sends http request async 
   request.send();
   }
   
   
   
   //funtion is called twice which will call 2 sepearte asyncrounous requests 
   getTodos();
   getTodos();