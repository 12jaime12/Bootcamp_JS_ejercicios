
const products = [
  { name: "Funko Dr. Strange", sellCount: 10 },
  { name: "Mochila de protones: Ghostbusters", sellCount: 302 },
  { name: "Sable laser FX", sellCount: 23 },
  { name: "Varita de Voldemort", sellCount: 6 },
];

let peliculas = (array) => {
    const goodProducts = [];
    const badProducts = [];
    array.forEach(element => {
        element.sellCount > 20 ? goodProducts.push(element) : badProducts.push(element);

        
    });
        console.log("peliculas buenas",goodProducts);
        console.log("peliculas malas",badProducts);
}

peliculas(products);