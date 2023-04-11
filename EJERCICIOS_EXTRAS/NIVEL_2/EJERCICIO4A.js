const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];
let findArrayIndex = (array, text) => {
  array.forEach((element, index) => {
    if (text === element) {
      console.log(index);
    }
  });
};
findArrayIndex(mainCharacters, "Leia");
