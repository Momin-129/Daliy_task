{
  //Using bracket notation with objects
  let person = {
    firstName: "Momin",
    lastName: "Rather",
    age: 23,
  };
  for (let property in person) {
    console.log(property + ":" + person[property]);
  }
}

{
  //modifying properties with property descriptors
  let person = {
    firstName: "Momin",
    lastName: "Rather",
    age: 23,
  };
  //console.log(Object.getOwnPropertyDescriptor(person, "firstName"));

  //writable attribute defines whether the value can be changed from its intial value
  Object.defineProperty(person, "firstName", { writable: false });
  person.firstName = "Kris"; // this will do nothing now because writable is set to false
  console.log(person.firstName); // this will print the original assigned name

  let person2 = {
    name: {
      firstName: "Momin",
    },
    age: 23,
  };

  Object.defineProperty(person2, "name", { writable: false });
  Object.freeze(person2.name); // this will prevent from making any changes
  person2.name.firstName = "Kris"; // this change will take place as we have made name unchanble
  //but its properties not
  console.log(person2.name.firstName); //without Object.freeze() this will print Kris
  //but with Object.freeze() it will  print Momin
}

{
  //Enumerable attibute prevents a property from appearing while iterating an object
  let person = {
    firstName: "Momin",
    lastName: "Rather",
    age: 23,
  };
  Object.defineProperty(person, "firstName", { enumerable: false });
  for (let property in person) console.log(property + ":" + person[property]); //only prints lastName and age
  console.log(person.firstName); //still can access directly
}

{
  //Configurable attibute prevents a property from changing even the configurable attribute cannot be set true once set to false
  let person = {
    firstName: "Momin",
    lastName: "Rather",
    age: 23,
  };
  Object.defineProperty(person, "firstName", { configurable: false });
  Object.defineProperty(person, "firstName", { configurable: true });
}

{
  //get and set methods for object properties
  let person = {
    firstName: "Momin",
    lastName: "Rather",
  };
  Object.defineProperty(person, "fullName", {
    get: function () {
      return this.firstName + " " + this.lastName;
    },
    set: function (value) {
      var nameParts = value.split(" ");
      this.firstName = nameParts[0];
      this.lastName = nameParts[1];
    },
  });
  console.log(person.fullName);
  person.fullName = "Ibtsam Qureshi";
  console.log(person.firstName);
  console.log(person.lastName);
}
