// const person = {
//     name: "John Doe",
//     sayHello: function() {
//       // Regular function
//       console.log("Hello, my name is", this.name);
//       // "this" refers to the "person" object
//     }
//   };
  
//   person.sayHello(); // Output: Hello, my name is John Doe
  
//   const greet = person.sayHello;
//   greet(); 
  // Output: Hello, my name is undefined (or error in strict mode)
  // "this" refers to the global scope (window object) or undefined in strict mode
  // Since "greet" is invoked separately, the context changes
  
  const person = {
    name: "MILA",
    sayHello: function() {
      // Regular function within the "person" object
      const greet = () => {
        // Arrow function inside the "sayHello" function
        console.log("Hello, my name is", this.name);
        // "this" refers to the enclosing function's "this" value,
        // which is the "person" object in this case
      };
      greet();
    }
  };
  
  person.sayHello(); // Output: Hello, my name is John Doe
  // "sayHello" is invoked within the "person" object, and "this" refers to the object itself
  