const alumns = [
  { name: "Pepe Viruela", T1: false, T2: false, T3: true },
  { name: "Lucia Aranda", T1: true, T2: false, T3: true },
  { name: "Juan Miranda", T1: false, T2: true, T3: true },
  { name: "Alfredo Blanco", T1: false, T2: false, T3: false },
  { name: "Raquel Benito", T1: true, T2: true, T3: true },
];

let comprobador = (array) => {
  array.forEach((element) => {
    for (key in element) {
      (element["T1"] === true && element["T2"] === true) ||
      (element["T1"] === true && element["T3"] === true) ||
      (element["T2"] === true && element["T3"] === true)
        ? (element.approved = true)
        : (element.approved = false);
    }
    console.log(element);
  });
};
comprobador(alumns);
