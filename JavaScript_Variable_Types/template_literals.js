let text = document.getElementById("content");

let person = {
  name: "Momin",
  age: 23,
};

//String.raw() function takes the complete string and renders it raw with all special characters,
//without it \t in unique id will not be printed.

// let value = String.raw`Current User is ${person.name},
// and his age is, ${person.age},
// his unique id is \t$D!\Uc4/`;

let value = highlightText`Current User is ${person.name},<br> 
and his age is, ${person.age},<br>
his unique id is \t$D!\Uc4/`;

function highlightText(strings, ...values) {
  let str = "";
  for (var i = 0; i < strings.raw.length; i++) {
    if (i > 0) {
      str += `<b>${values[i - 1]}</b>`;
    }
    str += strings.raw[i];
  }
  return str;
}

text.innerHTML = value;
