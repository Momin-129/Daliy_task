{
  let date = 23,
    day = 20,
    year = 2020;

  let valid = false;

  if (
    Number.isInteger(date) &&
    Number.isInteger(day) &&
    Number.isInteger(year)
  ) {
    valid = true;
  }

  console.log(valid);
}

{
  let num1 = 5,
    num2 = 0,
    num3 = 0.5;
  if (Number.isSafeInteger(num1)) console.log(num1 + " is safe integer");
  else console.log(num1 + " is not a safe integer");

  if (Number.isSafeInteger(num2)) console.log(num2 + " is safe integer");
  else console.log(num2 + " is not a safe integer");

  if (Number.isSafeInteger(num3)) console.log(num3 + " is safe integer");
  else console.log(num3 + " is not a safe integer");
}
