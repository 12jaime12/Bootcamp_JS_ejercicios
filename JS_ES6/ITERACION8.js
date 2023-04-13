const videogames = [
  { name: "Final Fantasy VII", genders: ["RPG"], score: 9.5 },
  { name: "Assasins Creed Valhala", genders: ["Aventura", "RPG"], score: 4.5 },
  { name: "The last of Us 2", genders: ["Acción", "Aventura"], score: 9.8 },
  { name: "Super Mario Bros", genders: ["Plataforma"], score: 8.5 },
  { name: "Genshin Impact", genders: ["RPG", "Aventura"], score: 7.5 },
  {
    name: "Legend of Zelda: Breath of the wild",
    genders: ["RPG", "La cosa más puto bonita que he visto nunca"],
    score: 10,
  },
];
const arrayAux1 = videogames.filter(
  (videogame) => (arrayaux = videogame.genders.includes("RPG"))
);
const aux = arrayAux1.reduce((acc, game) => {
  acc += game.score;
  return acc;
}, 0);
let resultado = aux / arrayAux1.length;
console.log(resultado);
