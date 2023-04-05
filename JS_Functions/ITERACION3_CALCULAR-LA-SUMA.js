const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(array) {
    let acc = 0;
    array.forEach(numero => { 
        acc += numero;
    });
    return acc;
}
console.log(sumAll(numbers));
