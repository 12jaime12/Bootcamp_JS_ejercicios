const input = document.querySelector(
  `input[data-function='toFilterStreamers']`
);
const div = document.createElement("div");
document.body.appendChild(div);

const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

const encontrar = (e) => {
  div.innerHTML = "";
  if (e.target.value !== "") {
    streamers.forEach((element) => {
      if (element.name.toLocaleLowerCase().includes(e.target.value)) {
        const parrafo = document.createElement("p");
        parrafo.innerHTML = element.name;
        div.appendChild(parrafo);
      }
    });
  }
};
input.addEventListener("click", encontrar);
