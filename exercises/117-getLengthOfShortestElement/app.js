function getLengthOfShortestElement(arr) {
    // Si el array está vacío, retornar 0
    if (arr.length === 0) {
        return 0;
    }

    // Usamos el método reduce() para encontrar el string con la longitud más corta
    return arr.reduce((minLength, current) => {
        return current.length < minLength ? current.length : minLength;
    }, Infinity);
}
let output = getLengthOfShortestElement(['one', 'two', 'three']);
console.log(output); // --> 3
