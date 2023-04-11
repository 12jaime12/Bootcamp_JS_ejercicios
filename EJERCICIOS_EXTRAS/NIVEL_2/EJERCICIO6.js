const fantasticFour = [
  "La antorcha humana",
  "Mr. Fantástico",
  "La mujer invisible",
  "La cosa",
];

let swap = (array, index1, index2) => {
  let arrayAux = [];
  array.forEach((element, index) => {
    if (index === index1 || index === index2) {
      arrayAux.push(index);
    }
  });
  console.log(arrayAux);
  let aux = array[arrayAux[0]];
  array[arrayAux[0]] = array[arrayAux[1]];
  array[arrayAux[1]] = aux;
  console.log(array);
};
swap(fantasticFour, 2, 3);
