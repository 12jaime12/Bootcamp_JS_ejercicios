let random = [3, 2, 56, 38, 25];

let ordenar = (array) => {
  let arraySort = [];
  let i = 0;
  array.forEach((element, index) => {
    let numero = 0;
    array.forEach((elementTwo) => {
      if (element < elementTwo) {
        numero1 = element;
      } else {
        numero2 = elementTwo;
      }
    });
    numero1 < numero2 ? arraySort.push(numero1) : arraySort.push(numero2);
    random.splice(arraySort[i], 1);
  });
  i++;
  return arraySort;
};
console.log(ordenar(random));

/*let ordenarFor = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let x = 0; x < array.length; x++) {
      let acc;
      if (array[i] > array[x]) {
        acc = array[i];
        array[i] = array[x];
        array[x] = acc;
      }
    }
    console.log(array[i]);
  }
};
ordenarFor(random);*/
