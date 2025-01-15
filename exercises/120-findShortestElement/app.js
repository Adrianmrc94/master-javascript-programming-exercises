function findShortestElement(arr) {
    // your code here
    // Si el array está vacío, retorna un string vacío
    if (arr.length === 0) {
        return '';
    }

    // Usamos el método reduce() para encontrar el string más corto
    return arr.reduce((shortest, current) => {
        return current.length < shortest.length ? current : shortest;
    }, arr[0]);
}

let output = findShortestElement(['a', 'two', 'three']);
console.log(output); // --> 'a'