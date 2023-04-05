//1.1
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log(avengers[0]);
//1.2
avengers[0] = "IRONMAN";
console.log(avengers);
//1.3
console.log(avengers.length);
//1.4
let rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
rickAndMortyCharacters.push("Morty","Summer");
console.log(rickAndMortyCharacters);
//1.5

rickAndMortyCharacters.pop();
console.log(rickAndMortyCharacters[0])
console.log(rickAndMortyCharacters[rickAndMortyCharacters.length-1]);
//1.6
rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickAndMortyCharacters.splice(1,1);
console.log(rickAndMortyCharacters);


