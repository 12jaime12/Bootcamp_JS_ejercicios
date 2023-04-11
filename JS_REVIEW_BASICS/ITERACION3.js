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
let iteracion3 = (array) => {
  let arrayaux = [];
  let arrayaux2 = [];
  let arrayrepetidas = [];
  for (const user of array) {
    //console.log(user);
    for (const key in user.favoritesSounds) {
      //console.log(key);
      !arrayaux.includes(key) && arrayaux.push(key);
      arrayaux2.push(key);
    }
  }

  //console.log(arrayaux2);
  arrayaux.forEach((element, index) => {
    let acc = 0;
    arrayaux2.forEach((element2) => {
      element === element2 && (acc += 1);
    });
    arrayrepetidas.push(acc);
    console.log(
      "el sonido " + arrayaux[index] + " se repite " + arrayrepetidas[index]
    );
  });
  //console.log(arrayaux);
  //console.log(arrayrepetidas);
};
iteracion3(users);
