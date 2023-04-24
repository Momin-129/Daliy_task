let box = document.getElementById("content");
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
