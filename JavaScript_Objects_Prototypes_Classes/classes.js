//Creating a Class

class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  //getters and setters (these live on object's prototype)
  get fullName() {
    return this.firstName + " " + this.lastName;
  }
  set fullName(fullName) {
    var nameParts = fullName.split(" ");
    this.firstName = nameParts[0];
    this.lastName = nameParts[1];
  }
  //method / function
  isAdult() {
    return this.age >= 18;
  }
}

class Student extends Person {
  constructor(firstName, lastName, age) {
    super(firstName, lastName, age);
    this._enrolledCourses = [];
  }
  static fromPerson(person) {
    return new Student(person.firstName, person.lastName, person.age);
  }
  enroll(courseId) {
    this._enrolledCourses.push(courseId);
  }
  getCourses() {
    return (
      this.fullName +
      "'s enrolled courses are: " +
      this._enrolledCourses.join(",")
    );
  }
}

let jim = new Student("Jim", "Cooper", 23);
jim.enroll("CS101");
console.log(jim.getCourses());

let jimStudent = Student.fromPerson(jim);
console.log(jimStudent);
