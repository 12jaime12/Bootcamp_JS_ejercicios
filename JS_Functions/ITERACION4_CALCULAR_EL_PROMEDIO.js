const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(array) {
    let longitud = array.length;
    let acc = 0;
    array.forEach(numero => { 
        acc += numero;
    });
    let promedio = acc/longitud;
    return promedio;
}
console.log(average(numbers));