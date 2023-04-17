const duplicates = [
  "sushi",
  "pizza",
  "burger",
  "potatoe",
  "pasta",
  "ice-cream",
  "pizza",
  "chicken",
  "onion rings",
  "pasta",
  "soda",
];
/*function removeDuplicates(array) {
    let comidas = array => new Set(array);
        return comidas(array);
  }
console.log(removeDuplicates(duplicates));*/
const removeDuplicates = (array) => {
  const arrayAux = [];
  array.forEach((element) => {
    !arrayAux.includes(element) && arrayAux.push(element);
  });
  return arrayAux;
};

console.log(removeDuplicates(duplicates));
