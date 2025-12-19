// 1----> Function to flatten a nested array
// Function to flatten a nested array

console.log("Task 1") /* for console clarification */

function flattenArray(arr) {
  let result = [];

  for (let item of arr) {
    // If the item is an array, recursively flatten it
    if (Array.isArray(item)) {
      result = result.concat(flattenArray(item));
    } else {
      // If it is not an array, push directly
      result.push(item);
    }
  }

  return result;
}

// Example
console.log(flattenArray([1, [2, [3, 4], 5], 6]));
// Output: [1, 2, 3, 4, 5, 6]


// 2----> Implement a debounce function
console.log("Task 2")
// Debounce function

function debounce(fn, delay) {
  let timer;

  return function (...args) {
    // Clear previous timer
    clearTimeout(timer);

    // Set new timer
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

// Example usage
const handleResize = debounce(() => {
  console.log("Window resized");
}, 500);

window.addEventListener("resize", handleResize);

// Debounce delays function execution

// Function runs only after the user stops triggering the event

// Common use: search input, resize, scroll


// 3---> Difference between == and ===
console.log("Task 3")
// == (loose equality)
console.log(5 == "5"); // true

// === (strict equality)
console.log(5 === "5"); // false

// compares values only (type conversion happens)
// compares both value and type (no type conversion)

// Always prefer === to avoid unexpected bugs.

// 4----> Predict the output (Promises + setTimeout)
console.log("Task 4")
console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");

// Start
// End
// Promise
// Timeout

/*
1. "Start" - normal synchronous code
2. "End"   - normal synchronous code
3. Promise - microtask queue (executes before setTimeout)
4. Timeout - macrotask queue
*/

// 5----> Fix a closure-related bug in a loop
console.log("Task 5")
// Buggy Code
for (var i = 1; i <= 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

// Output: 4 4 4

// var is function-scoped
// All callbacks share the same i

// Fixed Code (Using let)
for (let i = 1; i <= 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

// Output: 1 2 3

// let is block-scoped
// Each loop iteration gets its own copy of i
