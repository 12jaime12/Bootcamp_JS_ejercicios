const movies = [
  { title: "Madaraspar", duration: 192, categories: ["comedia", "aventura"] },
  { title: "Spiderpan", duration: 122, categories: ["aventura", "acción"] },
  {
    title: "Solo en Whatsapp",
    duration: 223,
    categories: ["comedia", "thriller"],
  },
  {
    title: "El gato con guantes",
    duration: 111,
    categories: ["comedia", "aventura", "animación"],
  },
];
let iteracion1 = (array) => {
  let array2 = [];
  for (const movie of array) {
    movie.categories.forEach((element) => {
      !array2.includes(element) && array2.push(element);
    });
  }
  console.log(array2);
};
iteracion1(movies);
