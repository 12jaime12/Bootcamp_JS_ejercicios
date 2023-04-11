const movies = [
  {
    title: "Bracula: Condemor II",
    duration: 192,
    categories: ["comedia", "aventura"],
  },
  {
    title: "Spider-Man: No Way Home",
    duration: 122,
    categories: ["aventura", "acción"],
  },
  {
    title: "The Voices",
    duration: 223,
    categories: ["comedia", "thriller"],
  },
  {
    title: "Shrek",
    duration: 111,
    categories: ["comedia", "aventura", "animación"],
  },
];
let ejercicio1 = (array) => {
  let array2 = [];
  for (const movie of array) {
    movie.categories.forEach((element) => {
      !array2.includes(element) && array2.push(element);
    });
  }
  console.log(array2);
};
ejercicio1(movies);
