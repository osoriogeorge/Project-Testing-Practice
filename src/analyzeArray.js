const analyzeArray = () => {
  function calculateAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum / arr.length;
  }
  function calculateMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return max;
  }
  function calculateMin(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      }
    }

    return min;
  }
  return { calculateAverage, calculateMax, calculateMin };
};

let numbers = [10, 20, 30, 40, 50];
const arrayAnalyzer = analyzeArray();

let average = arrayAnalyzer.calculateAverage(numbers);
let max = arrayAnalyzer.calculateMax(numbers);
let min = arrayAnalyzer.calculateMin(numbers);

console.log(average); // Output: 30
console.log(max); // Output: 50
console.log(min); // Output: 10

module.exports = analyzeArray;
