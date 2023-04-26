{
  function MyFunction() {
    var x = 10;
    console.log(x); // x is 10
    if (true) {
      var x = "Hello";
    }

    console.log(x); // x is Hello because var does not have block scope but has function scope
  }

  MyFunction();
}

{
  function MyFunction() {
    let x = 10;
    if (true) {
      let x = "Hello";
      console.log(x); // x is Hello
    }
    console.log(x); // x is 10 as let has block scope (const has also block scope)
  }
  MyFunction();
}

{
  function MyFunction() {
    // var x = 10;
    let x = 10;
    let x = 29; // not allow redeclaration with let in same block
    if (true) {
      //var x = "Hello";
      let x = "Hello";
      let x = "World"; //same cannot redeclare with let
      console.log(x);
    }
    console.log(x);
  }
  MyFunction();
}

{
  const arr = [1, 2, 3];
  arr = 3; // not allowed redeclaration
  arr[0] = 29; //but can update values
  console.log(arr);
}
