//4.1
const users = [
  { id: 1, name: "Abel" },
  { id: 2, name: "Julia" },
  { id: 3, name: "Pedro" },
  { id: 4, name: "Amanda" },
];
const arrayAux = users.map((user) => {
  return user;
});
console.log(arrayAux);
console.log("-");
//4.2
const arrayAux2 = users.map((user) => {
  if (user.name[0] === "A") {
    user.name = "Anacleto";
    return user;
  } else {
    return user;
  }
});
console.log(arrayAux2);
console.log("-");
//4.3
const cities = [
  { isVisited: true, name: "Tokyo" },
  { isVisited: false, name: "Madagascar" },
  { isVisited: true, name: "Amsterdam" },
  { isVisited: false, name: "Seul" },
];
const arrayAux3 = cities.map((city) => {
  if (city.isVisited) {
    return (city.name = `${city.name} Visitado`);
  } else {
    return city.name;
  }
});
console.log(arrayAux3);
console.log("-");
