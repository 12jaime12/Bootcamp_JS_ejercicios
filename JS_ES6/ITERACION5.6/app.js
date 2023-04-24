const input = document.querySelector(
  `input[data-function='toFilterStreamers']`
);
const encontrar = (e) => {
  const streamers = [
    { name: "rubius", age: 32, gameMorePlayed: "Minecraft" },
    { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
    { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
    { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
  ];
  streamers.forEach((element) => {
    if (element.name.toLocaleLowerCase().includes(e.target.value)) {
      console.log(element);
      const parrafo = document.createElement("p");
      parrafo.innerHTML = element.name;
      document.body.appendChild(parrafo);
    }
  });
};
input.addEventListener("click", encontrar);
