"use strict";

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

//Truely and Falsely

function trueFalse() {
  let price = 100,
    color = "RED";

  result = price > 50;
  box.innerHTML += result + "<br>";

  if (color) {
    box.innerHTML += "color is " + color + "<br>";
  }

  color = "";
  if (!color) {
    box.innerHTML += "Flase color value" + "<br>";
  }
}

// Logical Operator
function LogicalOperators() {
  let price = 200;

  if (price > 100 && price < 300) {
    box.innerHTML += "<span>And Operator both should be true</span><br>";
  }
  if (price > 100 || price < 200) {
    box.innerHTML += "<span>Or Operator only one should be true</span><br>";
  }
  if (!(price < 10)) {
    box.innerHTML +=
      "<span>Not Operator toggles true to false and vice versa</span><br>";
  }
}

// Short Circuting
function ShortCircuting() {
  let color = "Black",
    value = 100;

  result = isColorRed(color) && isGreaterThan500(value);
}

function isColorRed(color) {
  box.innerHTML += "<span>Color Block</span><br>";
  return color === "RED";
}

function isGreaterThan500(value) {
  box.innerHTML += "<span>Value Block</span><br>";
  return value > 500;
}

//Exception Handling
function tryCatch() {
  let result;
  try {
    result = x / 10;
    console.log(result);
  } catch (error) {
    throw {
      message: "Variable Not Defined Error: " + error.message,
      name: error.name,
    };
  } finally {
    console.log("This will run in any case");
  }
}

//Types of Operator
function TypeOf() {
  let prod = { firstName: "Momin", age: 23 };
  let introDate = new Date();
  let strValue = new String();
  let isActive = false;
  let result;
  let value = null;

  console.log("prod = " + typeof prod);
  console.log("prod.firstName = " + typeof prod.firstName);
  console.log("prod.age = " + typeof prod.age);
  console.log("introDate = " + typeof introDate);
  console.log("strValue = " + typeof strValue);
  console.log("isActive = " + typeof isActive);
  console.log("result = " + typeof result);
  console.log("value = " + typeof value);
}

//Casting to Constructor
function CastConstruct() {
  let prod = { firstName: "Momin", age: 23 };
  let introDate = new Date();
  let strValue = new String();
  let isActive = false;

  console.log("prod = " + prod.constructor.toString());
  console.log("prod.firstName = " + prod.firstName.constructor.toString());
  console.log("prod.age = " + prod.age.constructor.toString());
  console.log("introDate = " + introDate.constructor.toString());
  console.log("strValue = " + strValue.constructor.toString());
  console.log("isActive = " + isActive.constructor.toString());
}

//Helper Functions
function helperFunction() {
  let arr = [1, 2, 3, 4];
  let introDate = new Date();
  let result;
  let value = null;

  console.log("arr is Array? =" + isArray(arr));
  console.log("introDate is Date? =" + isDate(introDate));
  console.log(
    "result =" + isNullOrUndefined(result) ? "null/undefined" : "declared"
  );
  console.log(
    "value =" + isNullOrUndefined(value) ? "null/undefined" : "declared"
  );
}

function isArray(value) {
  return value.constructor.toString().indexOf("Array") > -1;
}

function isDate(value) {
  return value.constructor.toString().indexOf("Date") > -1;
}

function isNullOrUndefined(value) {
  return value === null || value === undefined;
}

//Instance Of Function
function InstanceOf() {
  let prod = new Product(680, "Circular Fram - Black", "FR=R928");
  let dt = new Date();
  let name = new String("Product Name");
  let value = "A simple String";

  console.log(
    "prod instanceof Product = " + (prod instanceof Product).toString()
  );
  console.log(
    "prod instanceof Object = " + (prod instanceof Object).toString()
  );
  console.log("date instanceof  Date= " + (dt instanceof Date).toString());
  console.log("dt instanceof Product = " + (dt instanceof Object).toString());
  console.log(
    "name instanceof String = " + (name instanceof String).toString()
  );
  console.log(
    "value instanceof String = " + (value instanceof String).toString()
  );
  console.log(
    "value instanceof Object = " + (value instanceof Object).toString()
  );
}

function Product(id, name, cost, price) {
  this.productID = id;
  this.name = name;
  this.color = "Black";
  this.standardCost = cost;
  this.listPrice = price;
  this.grossProfit = function () {
    return (this.listPrice - this.standardCost).toLocaleString("en-US", {
      style: "currency",
      currency: "INR",
    });
  };
}

//this Keyword in JavaScript
console.log("Begin: Global Scope:");
console.log("this.toString()");
console.log("this ===  window is " + (this === window).toString());
console.log("End: Global Scope");

function functionScope() {
  console.log(this.toString());
  console.log("this ===  window is " + (this === window).toString());
}

function eventHandler(value) {
  console.log(value.toString());
}

function objectLiteral() {
  let product = {
    productID: 680,
    name: "Round Fram - Black",
    standardCost: 1150,
    listPrice: 1500,
    grossProfit: function () {
      return (this.listPrice - this.standardCost).toLocaleString("en-US", {
        style: "currency",
        currency: "INR",
      });
    },
  };

  let prod2 = { standardCost: 543, listPrice: 972 };
  console.log(product.grossProfit.call(product)); // call takes arguments seprately.
  console.log(product.grossProfit.call(prod2));
  console.log("");
  console.log(product.grossProfit.apply(product)); // apply takes arguments as an array.
  console.log(product.grossProfit.apply(prod2));
}

function constructFunctions() {
  let prod_1 = new Product(680, "HL Road Frma -Black", 1059.31, 1431.5);
  let prod_2 = new Product(707, "Sports-100 Helmet, Red", 13.08, 34.99);

  console.log(prod_1.grossProfit());
  console.log(prod_2.grossProfit());
}
