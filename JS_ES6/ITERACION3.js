//3.1
const pointsList1 = [32, 54, 21, 64, 75, 43];
const arrayAux = [...pointsList1];
console.log(arrayAux);
console.log("-");
//3.2
const toy = { name: "Bus laiyiar", date: "20-30-1995", color: "multicolor" };
const objAux = { ...toy };
console.log(objAux);
console.log("-");
//3.3
const pointsList2 = [32, 54, 21, 64, 75, 43];
const pointsLis3 = [54, 87, 99, 65, 32];
const arrayAux2 = [...pointsList2, ...pointsLis3];
console.log(arrayAux2);
console.log("-");
//3.4
const toy2 = { name: "Bus laiyiar", date: "20-30-1995", color: "multicolor" };
const toyUpdate = { lights: "rgb", power: ["Volar like a dragon", "MoonWalk"] };
const objAux2 = { ...toy2, ...toyUpdate };
console.log(objAux2);
console.log("-");
//3.5
const colors = ["rojo", "azul", "amarillo", "verde", "naranja"];
const arrayAux3 = [...colors];
arrayAux3.splice(1, 1);
console.log(arrayAux3);
