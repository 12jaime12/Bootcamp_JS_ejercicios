//2.1
const div = document.createElement("div");
document.body.appendChild(div);
//2.2 y 2.3
//const p = document.createElement("p");
//div.appendChild(p);
for (let index = 0; index < 6; index++) {
  const p = document.createElement("p");
  div.appendChild(p);
}
//2.4
const parrafo = document.createElement("p");
let texto = document.createTextNode("Soy dinámico!");
parrafo.appendChild(texto);
document.body.appendChild(parrafo);
//2.5
const textoh2 = "Wubba Lubba dub dub";
const h2Insert = document.querySelectorAll(".fn-insert-here");
h2Insert.forEach((element) => {
  element.innerText = textoh2;
});

//2.6
const apps = ["Facebook", "Netflix", "Instagram", "Snapchat", "Twitter"];
const ul = document.createElement("ul");
document.body.appendChild(ul);
apps.forEach((element) => {
  const li = document.createElement("li");
  let texto = document.createTextNode(element);
  li.appendChild(texto);
  ul.appendChild(li);
});
//2.7
const removeList = document.querySelectorAll(".fn-remove-me");
removeList.forEach((element) => {
  element.remove();
});
//2.8
const p2 = document.querySelector("div");
p2.insertAdjacentHTML("afterbegin", `<p>Voy en medio!<p>`);
//2.9
const addList = document.querySelectorAll(".fn-insert-here");
addList.forEach((element) => {
  const parrafoAux = document.createElement("p");
  let textoAux = document.createTextNode("Voy dentro!");
  parrafoAux.appendChild(textoAux);
  element.appendChild(parrafoAux);
});
