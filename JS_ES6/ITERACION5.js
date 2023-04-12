//5.1
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];
const arrayAux = ages.filter((age) => age > 18);
console.log(arrayAux);
//5.2
const arrayAux2 = ages.filter((age) => age % 2 === 0);
console.log(arrayAux2);
//5.3
const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];
const arrayAux3 = streamers.filter(
  (streamer) => streamer.gameMorePlayed === "League of Legends"
);
console.log(arrayAux3);
//5.4
const arrayAux4 = streamers.filter((streamer) => streamer.name.includes("u"));
console.log(arrayAux4);
//5.5
const arrayAux5 = streamers.filter((streamer) =>
  streamer.gameMorePlayed.includes("Legends")
);
const arrayAux6 = arrayAux5.filter(
  (streamer) => streamer.age > 35 && streamer.gameMorePlayed.toUpperCase()
);
console.log(arrayAux6);
