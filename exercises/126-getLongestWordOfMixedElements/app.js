function getLongestWordOfMixedElements(arr) {
    // your code here
        // Filtramos solo los elementos que son strings
        let wordsArray = arr.filter(element => typeof element === 'string');

        // Si no hay strings en el array, retornamos una cadena vacía
        if (wordsArray.length === 0) {
            return '';
        }
    
        // Encontramos el string más largo usando reduce
        return wordsArray.reduce((longest, currentWord) => {
            return currentWord.length > longest.length ? currentWord : longest;
        });
}

let output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 'word'
