const nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];
function finderName(array,string) {
    let boolean;
  let nombreBuscado = array.findIndex(nombre => nombre === string);
  
  if(nombreBuscado && nombreBuscado !== -1){
    boolean = true;
    
    
    return ""+boolean +" y en la posicion "+nombreBuscado;
  }else{
    return "El nombre "+string+" no se encuentra en la lista"
  }
}

console.log(finderName(nameFinder,"Logan"));
console.log(finderName(nameFinder,"hola"));