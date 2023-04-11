const array = ["Caracol", "Mosquito", "Salamandra", "Ajolote"];
let findArrayIndex = (array, text) => {
  array.forEach((element, index) => {
    if (text === element) {
      console.log(index);
    }
  });
};
findArrayIndex(array, "Salamandra");
