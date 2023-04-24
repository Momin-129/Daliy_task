let msg = "Hello World";
let person = {
  name: "Momin",
  age: 23,
  showInfo: function () {
    showMessage(this.age);
  },
};

const values = ["a", "b", "c"];
const newValues = values.slice(1, 3);
showMessage(values.indexOf("a"));
