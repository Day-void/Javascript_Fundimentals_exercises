// // 1. Print every number in an array

// const numbers = [5, 10, 15, 20, 25];

// numbers.forEach(num => {
//     console.log(num);
// });

// // 2. Print every name in an array

// const names = ["Alice", "Bob", "Charlie", "David"];

// names.forEach(name => {
//     console.log(name);
// });

// // 3. Print each fruit in uppercase

// const fruits = ["apple", "banana", "orange"];

// fruits.forEach(fruit => {
//     console.log(fruit.toUpperCase());
// });

// 4. Find the sum of all numbers

const numbers = [2, 4, 6, 8, 10];
let sum = 0;

numbers.forEach(num => {
    sum += num;
});

console.log("Sum:", sum);