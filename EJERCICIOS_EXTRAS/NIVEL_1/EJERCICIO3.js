const movies = [
    { name: "Titan A.E.", durationInMinutes: 130 },
    { name: "Nightmare before Christmas", durationInMinutes: 225 },
    { name: "Inception", durationInMinutes: 165 },
    { name: "The Lord of the Rings", durationInMinutes: 967 },
    { name: "Star Wars: A New Hope", durationInMinutes: 214 },
    { name: "Terminator", durationInMinutes: 140 },
  ];

  let filtradoPeliculas = (array) => {
    let pequeñas = [];
    let medianas = [];
    let grandes = [];
    array.forEach(element => {
        if(element.durationInMinutes < 100){
            pequeñas.push(element);
            console.log("peliculas pequeñas",pequeñas);
        } else if(element.durationInMinutes > 100 && element.durationInMinutes < 200){
            medianas.push(element);
            console.log("peliculas medianas",medianas);
        } else(element.durationInMinutes)
            grandes.push(element);
            console.log("peliculas grandes",grandes);
    });
  }

  filtradoPeliculas(movies);
