const button = document.querySelector("button");

const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

const encontrar = () => {
  const input = document.querySelector("input");
  streamers.forEach((element) => {
    if (element.name.toLocaleLowerCase().includes(input.value)) {
      const parrafo = document.createElement("p");
      parrafo.innerHTML = element.name;
      document.body.appendChild(parrafo);
    }
  });
};

button.addEventListener("click", encontrar);
