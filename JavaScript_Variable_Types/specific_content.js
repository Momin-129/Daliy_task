{
  //using indexOf
  var str = "Please locate where 'locate' occurs!";

  var locate = str.indexOf("locate");
  if (locate > -1) console.log("Word Found");
}

{
  //using search
  var str = "Please locate where 'locate' occurs!";

  var locate = str.search("locate");
  if (locate > -1) console.log(locate);
}

{
  //use includes()
  let text = "Hello world, welcome to the universe.";
  let value = text.includes("world");
  if (value) console.log("Found");
}

{
  // use startsWith()
  let text = "Hello world, welcome to the universe.";
  let value = text.startsWith("Hello");
  if (value) console.log("Found Word");
}

{
  // use endsWith()
  let text = "Hello world, welcome to the universe.";
  let value = text.endsWith("universe.");
  if (value) console.log("Found Word");
}
