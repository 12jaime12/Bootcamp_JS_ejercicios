const users = [
  {
    name: "Manolo el del bombo",
    favoritesSounds: {
      waves: { format: "mp3", volume: 50 },
      rain: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Mortadelo",
    favoritesSounds: {
      waves: { format: "mp3", volume: 30 },
      shower: { format: "ogg", volume: 55 },
      train: { format: "mp3", volume: 60 },
    },
  },
  {
    name: "Super Lopez",
    favoritesSounds: {
      shower: { format: "mp3", volume: 50 },
      train: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "El culebra",
    favoritesSounds: {
      waves: { format: "mp3", volume: 67 },
      wind: { format: "ogg", volume: 35 },
      firecamp: { format: "mp3", volume: 60 },
    },
  },
];
let iteracion2 = (array) => {
  for (const user of array) {
    //let acc = 0;
    console.log(user.favoritesSounds);
    let acc = 0;
    let acc2 = 0;
    for (const key in user.favoritesSounds) {
      acc += user.favoritesSounds[key].volume;
      acc2++;
    }
    let resultadoIndividual = acc / acc2;
    console.log(
      "la media de volumen de " + user.name + " es " + resultadoIndividual
    );
  }
  //let resultado = acc / (array.length * 3);
  //console.log(resultado);
};
iteracion2(users);
