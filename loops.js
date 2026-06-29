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

// // 4. Find the sum of all numbers

// const numbers = [2, 4, 6, 8, 10];
// let sum = 0;

// numbers.forEach(num => {
//     sum += num;
// });

// console.log("Sum:", sum);

// // 5. Count how many items are in the array

// const items = ["item1", "item2", "item3", "item4"]; // Example array
// let count = 0;

// items.forEach(() => {
//     count++;
// });

// console.log("Total items:", count);

// // 6. Find the largest number in an array

// const numbers = [12, 45, 7, 89, 23];
// let max = numbers[0];

// numbers.forEach(num => {
//     if (num > max) {
//         max = num;
//     }
// });

// console.log("Largest number:", max);

// 7. Count how many numbers are even

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let evenCount = 0;

numbers.forEach(num => {
    if (num % 2 === 0) {
        evenCount++;
    }
});

console.log("Even numbers count:", evenCount);