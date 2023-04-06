const products = [
    { name: "Funko Dr. Strange", sellCount: 10 },
    { name: "Mochila de protones: Ghostbusters", sellCount: 302 },
    { name: "Sable laser FX", sellCount: 23 },
    { name: "Varita de Voldemort", sellCount: 6 },
  ];

let totalVentas = (array) => {
    let acc = 0;
    array.forEach(element => {
        acc += element.sellCount;
    });
    return acc;
}

console.log(totalVentas(products));