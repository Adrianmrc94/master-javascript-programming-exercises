function getLargestNumberAmongMixedElements(arr) {
    // your code here
        // Filtramos solo los elementos que son números
        let numbersArray = arr.filter(element => typeof element === 'number');

        // Si no hay números en el array, retornamos 0
        if (numbersArray.length === 0) {
            return 0;
        }
    
        // Encontramos el número más grande usando Math.max
        return Math.max(...numbersArray);
}

let output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 5
