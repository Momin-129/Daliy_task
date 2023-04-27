//A fuction's prototype is the object intance,
//that will become the prototype for all objects created using this function as constructor.

//An Object's prototype is the object instance from which the object is inherited.

"use strict";
{
  function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  Person.prototype.age = 29;
  console.log(Person.prototype);

  let jim = new Person("Jim", "Cooper");
  console.log(jim.__proto__); // this also has value 29
  //which means jim is also pointing to same object prototype as Person() function
  // jim.age = 19; // this will only change jim's age
  console.log(jim.age);

  console.log(jim.hasOwnProperty("age")); //if jim.age is not declared this value will be false else true

  //if jim.age not declare it will look in the object prototype and if age exist there it will return that value
  //
  Person.prototype = { age: 18 }; // creates a new object of Person

  console.log(jim.age); // this is linked to old object so its value is 29
  let Kris = new Person("Kris", "Cooper");
  console.log(Kris.age); // this is linked to new object so its value is 18
}
