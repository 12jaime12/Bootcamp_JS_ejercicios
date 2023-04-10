const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta'];
let buscador = (array) => {
    let newArray = []
    array.forEach(element => {
        let string = element.split(" ");
        if(string.includes("Camiseta") === true ){
            let newArray = string.join(" ");
            console.log(newArray);
        }   
        
    });
}
buscador(products);
