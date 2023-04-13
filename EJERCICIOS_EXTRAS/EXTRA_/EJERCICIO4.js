const list = [
  { name: "Mc Aitana", gender: "pop", order: 3 },
  { name: "Tote Queen", gender: "rap", order: 2 },
  { name: "Good Bunny", gender: "reggeaton", order: 4 },
  { name: "El sueño de Neo", gender: "pop", order: 1 },
];
//element.order.sort();
//return element;

//console.log(arrayAux);

const ordenaListas = (lista) => {
  lista.sort(function (a, b) {
    if (a.order > b.order) {
      return 1;
    } else if (a.order < b.order) {
      return -1;
    } else return 0;
  });
  return lista;
};
console.log(ordenaListas(list));
