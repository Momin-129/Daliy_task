let text = document.getElementById("content");

let person = {
  name: "Momin",
  age: 23,
};

//String.raw() function takes the complete string and renders it raw with all special characters,
//without it \t in unique id will not be printed.
let str = String.raw`Current User is ${person.name}, 
and his age is, ${person.age},
his unique id is \t$D!\Uc4/`;

function highlightText(strings, ...values) {
  let str = "";
}

text.innerText = str;
