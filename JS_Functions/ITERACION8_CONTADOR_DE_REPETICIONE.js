const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
  ];
  function repeatCounter(array) {
    let acc = 0;
    let i = 0;
    array.sort();
    array.forEach(palabraC => {
        acc = 0;
        array.forEach(palabra => {
            palabraC === palabra ? acc += 1 : acc = acc;
        });
        array.splice(i,acc-1)
        //delete(array[i]);
        i++;
        /*let palabras = [];
        palabras.push(palabraC);
        let repetidas = [];
        repetidas.push(acc);
        let palabrasTotal = [];
        palabrasTotal.push(palabras[i]);
        palabrasTotal.push(repetidas[i]);*/
        if(palabraC != undefined){
            console.log("la palabra "+palabraC+" esta repetida "+acc);
        }
        //return palabrasTotal;
        //console.log(palabrasTotal[i]);
        
    });
}
  console.log(repeatCounter(counterWords));

