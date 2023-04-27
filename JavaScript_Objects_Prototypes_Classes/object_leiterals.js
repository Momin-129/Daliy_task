"use strict";

{
  let person = {
    firstName: "Momin",
    lastName: "Hussain",
  };

  console.log(person.firstName + " " + person.lastName);

  //dynamic nature of JavaScript , we can add another entry to the person object

  person.age = 17;

  //adding function to object
  person.isAdult = function () {
    return this.age >= 18;
  };
  console.log(person.isAdult());
}

{
  //using fuction to initialize object
  function registerUser(fName, lName) {
    let person = {
      firstName: fName,
      lastName: lName,
    };
    console.log(person);
  }
  registerUser("Momin", "Rather");
}

{
  //not using key:vlaue pairs (property shorthand syntax)
  function registerUser(firstName, lastName) {
    let person = {
      firstName,
      lastName,
    };
    console.log(person);
  }
  registerUser("Momin", "Rather");
}

{
  //object leteral method declaration shorthand
  let person = {
    firstName: "Momin",
    lastName: "Rather",
    age: 23,
    //this is shorthand method to declare a method in object
    isAdult() {
      return this.age >= 18;
    },
  };
  console.log(person.isAdult());
}

{
  //Object properties
  let person = {
    firstName: "Momin",
    lastName: "Rather",
    age: 23,
    isAdult() {
      return this.age >= 18;
    },
  };
  //Using Object.keys() to displays object properties
  console.log(Object.keys(person));
  //Using for loop to display object properties
  for (let propertyName in person) console.log(propertyName);
}

{
  //Object Equality
  //in objects rather than comparing values the address space is compared
  let person1 = {
    firstName: "Momin",
    lastName: "Rather",
  };

  let person2 = {
    firstName: "Momin",
    lastName: "Rather",
  };

  console.log(person1 == person2); //false
  console.log(person1 === person2); //false
  console.log(Object.is(person1, person2)); //false

  //if we do let person2  = person1 then the above values will be true
}

{
  //Using Object.assign() to copy to or merge two objects
  let person1 = {
    firstName: "Momin",
    lastName: "Rather",
  };

  let person2 = {};
  //copy object
  Object.assign(person2, person1); // in this case equality will return false as it is assigned a new location
  console.log(person2);

  let healthStatus = { height: 68, weight: 150 };
  //merge objects
  // Object.assign(person1, healthStatus);
  console.log(person1);

  //using function for Object.assign() and preventing the original object from being mutated
  function mergeHealth(person, healthStatus) {
    return Object.assign({}, person, healthStatus); // this merges both person and healthStatus into a new object
    //witout mutating person1
  }
  let mergedPerson = mergeHealth(person1, healthStatus);
  console.log(mergedPerson);
  console.log(person1);
}

{
  //Constructor Function
  function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.isAdult = function () {
      return this.age < 24;
    };
  }
  let p1 = new Person("Momin", "Rather", 23);
  let p2 = new Person("Sapna", "Devi", 24);

  console.log(p1.isAdult());
  console.log(p2.isAdult());
}

{
  //Object.create() method
  let person1 = {
    firstName: "Momin",
    lastName: "Rather",
  };
  let person2 = Object.create(Object.prototype, {
    firstName: {
      value: "Jim",
      enumerable: true,
      writable: true,
      configurable: true,
    },
    lastName: {
      value: "Cooper",
      enumerable: true,
      writable: true,
      configurable: true,
    },
    age: {
      value: 23,
      enumerable: true,
      writable: true,
      configurable: true,
    },
  });

  console.log(person1);
  console.log(person2);
}
