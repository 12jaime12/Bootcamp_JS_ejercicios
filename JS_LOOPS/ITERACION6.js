const toys = [
  { id: 5, name: "Buzz MyYear" },
  { id: 11, name: "Action Woman" },
  { id: 23, name: "Barbie Man" },
  { id: 40, name: "El gato con Guantes" },
  { id: 40, name: "El gato felix" },
];

let avanzadoForOf = (array) => {
  let i = 0;
  for (let toy of array) {
    if (toy.name.includes("gato")) {
      array.splice(i, 1);
    }
    i++;
  }
  console.log(array);
};

avanzadoForOf(toys);
