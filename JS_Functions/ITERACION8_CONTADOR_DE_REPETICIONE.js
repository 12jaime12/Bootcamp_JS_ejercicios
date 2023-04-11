const counterWords = [
  "code",
  "repeat",
  "eat",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
  "enjoy",
  "upgrade",
  "code",
];
function repeatCounter(array) {
  let acc = 0;
  let i = 0;
  array.sort();
  array.forEach((palabraC) => {
    acc = 0;
    array.forEach((palabra) => {
      palabraC === palabra ? (acc += 1) : (acc = acc);
    });
    array.splice(i, acc - 1);
    //delete(array[i]);
    //console.log("la palabra "+palabraC+" esta repetida "+acc);
    function Repetidas(palabra, numero) {
      this.palabra = palabra;
      this.numero = numero;
    }

    let nuevo = new Repetidas(palabraC, acc);
    i++;
    //console.log(nuevo);
    console.log(
      "la palabra " + nuevo.palabra + " esta repetida " + nuevo.numero
    );
    //return palabrasTotal;
    //console.log(palabrasTotal[i]);
    //return nuevo;
  });
  //return nuevo;
}
repeatCounter(counterWords);
