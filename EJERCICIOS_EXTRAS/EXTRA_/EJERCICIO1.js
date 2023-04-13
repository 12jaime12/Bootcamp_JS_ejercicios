const splitName = (text) => {
  const arrayAux = text.split(" ");
  //console.log(arrayAux);
  let nombre = arrayAux[0];
  let apellido = arrayAux[1];
  return `El nombre es ${nombre} y el apellido ${apellido}`;
};
console.log(splitName("Peter Parker"));
