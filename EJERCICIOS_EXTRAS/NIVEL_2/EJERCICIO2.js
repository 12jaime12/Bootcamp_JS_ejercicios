const users = [
  {
    name: "Alberto",
    favoritesSounds: {
      waves: { format: "mp3", volume: 50 },
      rain: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Antonio",
    favoritesSounds: {
      waves: { format: "mp3", volume: 30 },
      shower: { format: "ogg", volume: 55 },
      train: { format: "mp3", volume: 60 },
    },
  },
  {
    name: "Pedro",
    favoritesSounds: {
      shower: { format: "mp3", volume: 50 },
      train: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Cristina",
    favoritesSounds: {
      waves: { format: "mp3", volume: 67 },
      wind: { format: "ogg", volume: 35 },
      firecamp: { format: "mp3", volume: 60 },
    },
  },
];

let accVolume = (array) => {
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
accVolume(users);
