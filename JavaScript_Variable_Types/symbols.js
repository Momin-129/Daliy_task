const sym = Symbol("foo");
console.log(typeof sym); // "symbol"

let firstName = Symbol("first name"),
  lastName = Symbol("last name");

console.log(firstName);
console.log(lastName);
