//     // 1. Print every number in an array

//     const numbers = [5, 10, 15, 20, 25];

//     numbers.forEach(num => {
//         console.log(num);
//     });

//     // 2. Print every name in an array

//     const names = ["Alice", "Bob", "Charlie", "David"];

//     names.forEach(name => {
//         console.log(name);
//     });

//     // 3. Print each fruit in uppercase

//     const fruits = ["apple", "banana", "orange"];

//     fruits.forEach(fruit => {
//         console.log(fruit.toUpperCase());
//     });

//     // 4. Find the sum of all numbers

//     const numbers = [2, 4, 6, 8, 10];
//     let sum = 0;

//     numbers.forEach(num => {
//         sum += num;
//     });

//     console.log("Sum:", sum);

//     // 5. Count how many items are in the array

//     const items = ["Orei", "Karma", "BigJosh21", "DemonSlayer", "GamerX", "PixelMaster", "Void"];
//     let count = 0;

//     items.forEach(() => {
//         count++;
//     });

//     console.log("Total items:", count);

//     // 6. Find the largest number in an array

//     const numbers = [12, 45, 7, 89, 23];
//     let max = numbers[0];

//     numbers.forEach(num => {
//         if (num > max) {
//             max = num;
//         }
//     });

//     console.log("Largest number:", max);

//     // 7. Count how many numbers are even

//     const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
//     let evenCount = 0;

//     numbers.forEach(num => {
//         if (num % 2 === 0) {
//             evenCount++;
//         }
//     });

//     console.log("Even numbers count:", evenCount);

//     // 8. Print only names that start with the letter "A"

//     const names = ["Alice", "Bob", "Andrew", "Charlie", "Amy"];

//     names.forEach(name => {
//         if (name.startsWith("A")) {
//             console.log(name);
//         }
//     });

//     //9. Count how many vowels are in an array of letters const numbers = [1, 2, 3, 4, 5];
//   const letters = ["a", "b", "e", "g", "i", "o", "u"];
// const vowels = ["a", "e", "i", "o", "u"];
// let vowelCount = 0;

// letters.forEach(letter => {
//     if (vowels.includes(letter.toLowerCase())) {
//         vowelCount++;
//     }
// });

// console.log("Vowel count:", vowelCount);

// 10. Create a new array where each number is doubled

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = [];

numbers.forEach(num => {
    doubledNumbers.push(num * 2);
});

console.log(doubledNumbers);