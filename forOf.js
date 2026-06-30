// forOf loops

// A for..of loop is a way iterating items in a collection (like an array) one at  a time without having to manually manage counters, or deal with index numbers
// for...of loops are a great way to iterate over arrays, strings, maps, sets, and other iterable objects. They provide a simpler and more readable syntax compared to traditional for loops or forEach methods.
let fruits = ["apple", "banana", "mango"];

for (const fruit of fruits) {
//      // do something with item
//   fruit — the array (or other iterable) you want to loop through
// fruits — a variable name you choose; it holds the current item on each pass
// the loop automatically stops when it reaches the end
    console.log(fruit);
}

let names = ["Void", "Noctis", "Shadow", "Ghost"];

for (const name of names) {
  console.log("Checking: " + name);
  
  if (name === "Shadow") {
    console.log("Found Shadow! Stopping search.");
    break;
  }
}