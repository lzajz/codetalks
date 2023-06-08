//pros of async : error handling, promise chaining, readability 

function resolveAfterDelay() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Resolved after delay");
        // Simulate an asynchronous operation that resolves after a delay
      }, 2000);
    });
  }
  
  async function asyncFunction() {
    try {
      const result = await resolveAfterDelay();
      // Wait for the promise to resolve and assign the resolved value to "result"
      console.log(result);
      // Output: Resolved after delay
    } catch (error) {
      console.error("Error:", error);
      // Handle any errors that occurred during the asynchronous operation
    }
  }
  
  asyncFunction();
  // Call the async function
  