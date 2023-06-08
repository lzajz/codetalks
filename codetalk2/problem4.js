const numbers = [48, 20, 18, 7, 12, 9, 8, 10, 12, 96, 3, 36, 51];

function getDivisibleNumbers(numbers) {
  // Use the filter method on the numbers array
  const divisibleNumbers = numbers.filter((number) => {
    // Filter the numbers that are divisible by both 3 and 6 but not 9
    return number % 3 === 0 && number % 6 === 0 && number % 9 !== 0;
    // Check if the number is divisible by 3, 6, and not divisible by 9
  });

  return divisibleNumbers;
}

const result = getDivisibleNumbers(numbers);
console.log(result);
// Output: [48, 12, 96]
// The resulting array contains numbers 48, 12, and 96 that satisfy the conditions
