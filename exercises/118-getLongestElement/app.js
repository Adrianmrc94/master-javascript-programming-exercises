function getLongestElement(arr) {
    // your code here
        // Si el array está vacío, retorna un string vacío
        if (arr.length === 0) {
            return '';
        }
    
        // Usamos el método reduce() para encontrar el string con la longitud más larga
        return arr.reduce((longest, current) => {
            return current.length > longest.length ? current : longest;
        }, "");
}

let output = getLongestElement(['one', 'two', 'three']);
console.log(output); // --> 'three'
