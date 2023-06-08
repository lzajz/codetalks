//what is a callback function?
//a function passed into another function as an argument


//what is a callback hell?
//-multiple callbacks are nested on top of each other
//- difficult to understand and maintain

//how do they occur?
// occurs when we have multiple asynchronous operations that depend on each other


acynOp1(function(result1) {
    // Handle result1
    asyncOp2(function(result2) {
      // Handle result2
      asyncOp3(function(result3) {
        // Handle result3
        asyncOp4(function(result4) {
          // Handle result4
          asyncOp5(function(result5) {
            // Handle result5
           
          });
        });
      });
    });
  });


  //we can avoid callback hells by using promises 

         //Promises provide a more structured and readable way to
         // handle asynchronous operations. Instead of using nested callbacks,
         // you can chain promises using .then()
  asyncOp1()
  .then(function(result1) {
    // Handle result1
    return asyncOp2();
  })
  .then(function(result2) {
    // Handle result2
    return asyncOp3();
  })
  .then(function(result3) {
    // Handle result3
    return asyncOp4();
  })
  .then(function(result4) {
    // Handle result4
    return asyncOp5();
  })
  .then(function(result5) {
    // Handle result5
    // More operations...
  })
  .catch(function(error) {
    // Handle errors
  });


