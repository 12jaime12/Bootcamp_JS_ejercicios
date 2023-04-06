const fruits = ["Strawberry", "Banana", "Orange", "Apple"];
const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

let veganas = (array1,array2) => {
    array1.forEach(element => {
        let i = 0;
        if(element.isVegan === false){
            element.name = array2[i];
            element.isVegan = true;
            array2.splice(i,1);
            i++;
        }
    });
    console.log(array1);
}
veganas(foodSchedule,fruits);