const videogames = [
  { name: "Final Fantasy VII", genders: ["RPG"], score: 9.5 },
  { name: "Assasins Creed Valhalla", genders: ["Aventura", "RPG"], score: 4.5 },
  { name: "The Last of Us 2", genders: ["Acción", "Aventura"], score: 9.8 },
  { name: "Super Mario Odissey", genders: ["Plataforma"], score: 8.5 },
  { name: "Diablo III", genders: ["RPG", "Aventura"], score: 7.5 },
  {
    name: "Shadow of the Colossus",
    genders: ["Aventura", "El mejor videojuego"],
    score: 10,
  },
];
const arrayAux = videogames.filter((videogame) =>
  videogame.genders.includes("Aventura")
);
//console.log(arrayAux);
const arrayAux2 = arrayAux.reduce((acc, game) => {
  acc += game.score;
  return acc;
}, 0);
let resultado = arrayAux2 / arrayAux.length;
console.log(resultado);
