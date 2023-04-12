//2.1
const game = {
  title: "The last us 2",
  gender: ["action", "zombie", "survival"],
  year: 2020,
};

let { title, gender, year } = game;
console.log(title);
console.log(gender);
console.log(year);
console.log("-");
//2.2
const fruits = ["Banana", "Strawberry", "Orange"];
let [fruit1, fruit2, fruit3] = fruits;
console.log(fruit1, fruit2, fruit3);
console.log("-");
//2.3
const animalFunction = () => {
  return { name1: "Bengal Tiger", race: "Tiger" };
};
let { name1, race } = animalFunction();
console.log(name1, race);
console.log("-");
//2.4
const car = { name: "Mazda 6", itv: [2015, 2011, 2020] };
let { name, itv } = car;
console.log(name, itv);
let [age1, age2, age3] = itv;
console.log(age1, age2, age3);
