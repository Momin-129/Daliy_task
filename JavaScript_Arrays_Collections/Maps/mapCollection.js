// To create a Map we use new Map()

const array = [
  ["apple", 500],
  ["banana", 600],
  ["cherry", 600],
];

const fruits = new Map(array);

console.log("Original Map ", fruits, "\n");

// To add elements to Map we can use set() method

fruits.set("mango", 800);

console.log("After adding an element ", fruits, "\n");

// To get individual value using key use get() method

let val = fruits.get("apple");
console.log("Value of key apple ", val, "\n");

// To get total number of elements in map use size property

let total = fruits.size;
console.log("Total elements in map are: ", total, "\n");

// To delete an item from we use delete() method

let deletedItem = fruits.delete("apple");

console.log("Map after deleting first item ", fruits, "\n");

// To remove all elements in Map we use clear() method

fruits.clear();
console.log("After clearing whole map", fruits, "\n");

// To check if an element exits in the map

const array2 = [
  ["apple", 500],
  ["banana", 600],
  ["cherry", 600],
];

const fruits2 = new Map(array);
let element = fruits2.has("apple");

console.log(element);

// Maps are objects
console.log(typeof fruits2);

// To iterate through a map

fruits2.forEach((value, key) => {
  console.log(key, ":", value);
});
