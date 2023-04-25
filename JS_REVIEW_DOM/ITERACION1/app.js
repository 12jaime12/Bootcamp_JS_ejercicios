//1.1
const countries = ["Japón", "Nicaragua", "Suiza", "Australia", "Venezuela"];

const ul = document.createElement("ul");
document.body.appendChild(ul);
const listado = () => {
  countries.forEach((element) => {
    const li = document.createElement("p");
    li.innerHTML = element;
    ul.appendChild(li);
  });
};
listado();
//1.2
const borrar = () => {
  const remove = document.querySelector(".fn-remove-me");
  remove.remove();
};
borrar();
//1.3
const cars = ["Mazda 6", "Ford fiesta", "Audi A4", "Toyota corola"];
const div = document.querySelector("div[data-function='printHere']");
const ul2 = document.createElement("ul");
div.appendChild(ul2);
document.body.appendChild(ul);
const listado2 = () => {
  cars.forEach((element) => {
    const li = document.createElement("p");
    li.innerHTML = element;
    ul2.appendChild(li);
  });
};
listado2();
//1.4
const countries2 = [
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
];
/*const cuatro = () => {
  countries2.forEach((element) => {
    const div2 = document.createElement("div");
    const h4 = document.createElement("h4");
    const img = document.createElement("img");
    div2.setAttribute("id", "hola");
    h4.innerHTML = element.title;
    img.setAttribute("src", element.imgUrl);
    document.body.appendChild(div2);
    div2.append(h4, img);
  });
};
cuatro();*/
//1.5

//1.6
const seis = () => {
  countries2.forEach((element, index) => {
    const div2 = document.createElement("div");
    const h4 = document.createElement("h4");
    const img = document.createElement("img");
    div2.setAttribute("class", `hola`);
    div2.setAttribute("id", `${index}`);
    h4.innerHTML = element.title;
    img.setAttribute("src", element.imgUrl);
    document.body.appendChild(div2);
    div2.append(h4, img);
  });
};

const insertarBoton = () => {
  const divs2 = document.querySelectorAll(".hola");
  divs2.forEach((element, index) => {
    const button2 = document.createElement("button");
    button2.innerHTML = "borrar";
    element.appendChild(button2);
    button2.value = `${index}`;
    button2.addEventListener("click", borrarDiv);
  });
};

const borrarDiv = (e) => {
  const div3 = document.getElementById(e.target.value);
  div3.innerHTML = "";
};

seis();

const button = document.createElement("button");
button.innerHTML = "hola";
document.body.appendChild(button);

insertarBoton();

const botonBorrar = () => {
  const divs = document.querySelectorAll(".hola");
  const ultimoDiv = divs[divs.length - 1];
  ultimoDiv.innerHTML = "";
  ultimoDiv.setAttribute("class", "");
};

button.addEventListener("click", botonBorrar);
