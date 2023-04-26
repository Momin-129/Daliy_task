{
  //this is helpfull because you don't have to know the exact column name or key in objects
  let array = [121, "Momin", "20-12-2001", "161 Gujjar Nagar", 180001];
  const [roll, name, dob, ...rest] = array;
  console.log(roll); //121
  console.log(name); //Momin
  console.log(dob); //20-12-2001
  console.log(rest); //161 Gujjar Nagar, 180001
}

{
  const object = { roll: 121, name: "Momin" };

  const { roll, name } = object;
  console.log(roll); //this will work as object.roll
  console.log(name);
}
