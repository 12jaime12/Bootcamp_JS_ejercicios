//1.1
const character = {name: 'Jack Sparrow', age: 10};
character.age = 25
console.log(character);
//1.2
let firstName = "Jon";
let lastName = "Snow";
let age = 24;
console.log("Soy "+firstName+" "+lastName+", tengo "+age+" años y me gustan los lobos.");
//1.3
const toy1 = {name: 'Buss myYear', price: 19};
const toy2 = {name: 'Rallo mcKing', price: 29};
let resultado = toy1.price + toy2.price;
console.log(resultado);
//1.4
let globalBasePrice = 10000;
const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};
//finalPrice = basePrice + globalBasePrice
globalBasePrice = 25000;
let fp1 = car1.basePrice + globalBasePrice;
let fp2 = car2.basePrice + globalBasePrice;
car1.finalPrice = fp1;
car2.finalPrice = fp2;
console.log(car1);
console.log(car2);
