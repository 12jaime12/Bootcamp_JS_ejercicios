const animals = ["Rintintín", "Cosmo", "Gato con botas", "Asno"];

const contadorDeLetras = (array, letra) => {
  let acc = 0;
  array.forEach((element) => {
    for (let i = 0; i < element.length; i++) {
      if (element[i].toLowerCase() === letra.toLowerCase()) {
        acc++;
      }
    }
  });
  return `La letra '${letra}' se repite ${acc} veces`;
};
console.log(contadorDeLetras(animals, "r"));
