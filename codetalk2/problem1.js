// Example 1: Basic Promise

function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = { id: 1, name: "John Doe" };
        resolve(data);
        // Simulating an asynchronous operation that resolves with data
      }, 2000); // Simulating a delay of 2 seconds
    });
  }
  
  fetchData()
    .then((data) => {
      console.log("Data:", data);
      // Handle the resolved data
    })
    .catch((error) => {
      console.error("Error:", error);
      // Handle any errors that occurred during the promise execution
    });
  
  
  // Example 2: Promise Chaining
  
  function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = { id: 1, name: "John Doe" };
        resolve(data);
        // Simulating an asynchronous operation that resolves with data
      }, 2000); // Simulating a delay of 2 seconds
    });
  }
  
  function processName(data) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        data.name = data.name.toUpperCase();
        resolve(data);
        // Simulating an asynchronous operation that modifies the data
      }, 1000); // Simulating a delay of 1 second
    });
  }
  
  fetchData()
    .then(processName)
    .then((data) => {
      console.log("Processed Data:", data);
      // Handle the processed data
    })
    .catch((error) => {
      console.error("Error:", error);
      // Handle any errors that occurred during the promise execution
    });
  