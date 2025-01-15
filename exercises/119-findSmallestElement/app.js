function findSmallestElement(arr) {
    // your code here
    // Si el array está vacío, retorna 0
    if (arr.length === 0) {
        return 0;
    }

    // Usamos el método reduce() para encontrar el número más pequeño
    return arr.reduce((smallest, current) => {
        return current < smallest ? current : smallest;
    }, arr[0]);
}

let output = findSmallestElement([4, 1, 9, 10]);
console.log(output); // --> 1