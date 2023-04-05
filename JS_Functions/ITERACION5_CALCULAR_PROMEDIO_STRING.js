const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
function averageWord(array) {
    let acc = 0;
    array.forEach(element => {
        typeof element === "number" ? acc += element : acc += element.length;
    });
    return acc;
}
console.log(averageWord(mixedElements));