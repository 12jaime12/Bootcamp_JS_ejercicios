const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
  "Anakin",
];
const findArrayIndex = (array, text) => {
  let array2 = [];
  array.forEach((element, index) => {
    if (text === element) {
      console.log(index);
      array2.push(index);
    }
  });
  return array2;
};

const removeItem = (array, text) => {
  const arrayAux = findArrayIndex(array, text);
  let i = 0;
  arrayAux.forEach((index) => {
    array.splice(index - i, 1);
    i++;
  });
  console.log(array);
};

removeItem(mainCharacters, "Anakin");
