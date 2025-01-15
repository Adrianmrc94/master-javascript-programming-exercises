function findShortestWordAmongMixedElements(arr) {
    // your code here
       // Filtramos solo los elementos que son cadenas de texto (strings)
       let stringsArray = arr.filter(element => typeof element === 'string');
    
       // Si no hay cadenas, retornamos una cadena vacía
       if (stringsArray.length === 0) {
           return '';
       }
   
       // Usamos el método reduce para encontrar la palabra más corta
       return stringsArray.reduce((shortest, currentWord) => {
           return currentWord.length < shortest.length ? currentWord : shortest;
       }); 
}

let output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output); // --> 'two'
