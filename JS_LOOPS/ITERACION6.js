const toys = [
  { id: 5, name: "Buzz MyYear" },
  { id: 11, name: "Action Woman" },
  { id: 23, name: "Barbie Man" },
  { id: 40, name: "El gato con Guantes" },
  { id: 40, name: "El gato felix" },
  { id: 40, name: "El gato con Guantes" },
];

let avanzadoForOf = (array) => {
  let arrayAux = [];
  for (let toy of array) {
    if (!toy.name.includes("gato")) {
      arrayAux.push(toy);
      //array.splice(i, 1);
    }
  }
  console.log(arrayAux);
};

avanzadoForOf(toys);
