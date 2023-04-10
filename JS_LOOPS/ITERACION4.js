const alien = {
  name: "Wormuck",
  race: "Cucusumusu",
  planet: "Eden",
  weight: "259kg",
};

let bucleForIn = (array) => {
  for (const key in array) {
    console.log(key, array[key]);
  }
};
bucleForIn(alien);
