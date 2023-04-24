let box = document.getElementById("content");

//Switch Case Statement
function SwitchCase() {
  let choice = 2;
  switch (choice) {
    case 1: {
      let msg = "Case One Used";
      box.innerHTML = msg;
      break;
    }
    case 2: {
      let msg = "Case Second Used";
      box.innerHTML = msg;
      break;
    }
    case 3:
      box.innerHTML = "Case Third Used";
      break;
    case 4:
      box.innerHTML = "Case Fourth Used";
      break;

    default:
      box.innerHTML = "Default Case Used";
      break;
  }
}

// For/In and For/Of loops
function ForIn() {
  let product = [
    {
      ID: 680,
      name: "Circular Frame",
      color: "RED",
      standardCost: 1050,
      listPrice: 1450,
    },
    {
      ID: 681,
      name: "Square Frame",
      color: "BLUE",
      standardCost: 1150,
      listPrice: 1450,
    },
    {
      ID: 682,
      name: "Hexagon Frame",
      color: "ORANGE",
      standardCost: 1250,
      listPrice: 1450,
    },
  ];
  for (const item of product) {
    if (item.color == "BLUE") {
      continue;
    }
    console.log(JSON.stringify(item));
  }
}

//Math Functions

function Math() {
  let price = 200;
  let result = 0;
  box.innerHTML += "<p>price =</p>" + price;

  //Addition
  result = price + 100;
  box.innerHTML += "<p>price + 100 =</p>" + result;

  //Subtaction
  result = price - 10;
  box.innerHTML += "<p>price - 10 =</p>" + result.toString();

  //Multiplication
  result = price * 2;
  box.innerHTML += "<p>price * 2 =</p>" + result.toString();

  //Division
  result = price / 2;
  box.innerHTML += "<p>price / 2 =</p>" + result.toString();

  //Exponentiation
  result = price ** 2;
  box.innerHTML += "<p>price ** 2 =</p>" + result.toString();

  //Modulus
  result = price % 3;
  box.innerHTML += "<p>price % 3 =</p>" + result.toString();

  //Increment
  result = price++;
  box.innerHTML += "<p>price++ =</p>" + result.toString();

  //Decrement
  result = price--;
  box.innerHTML += "<p>price-- =</p>" + result.toString();
}
