//2
const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord(array) {
    let palabraLarga = "";
array.forEach(avenger => {
    palabraLarga.length <= avenger.length ? palabraLarga = avenger : palabraLarga = palabraLarga
});
return palabraLarga;
}
console.log(findLongestWord(avengers));    
