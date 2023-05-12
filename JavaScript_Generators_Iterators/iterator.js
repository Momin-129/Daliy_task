let myObj = {};

myObj[Symbol.iterator] = function () {
  let n = 0;
  done = false;
  return {
    next() {
      n += 10;
      if (n == 100) done = true;
      return { value: n, done: done };
    },
  };
};

let iterator = myObj[Symbol.iterator]();

while (true) {
  const result = iterator.next();
  if (result.done) break;
  console.log(result.value);
}
