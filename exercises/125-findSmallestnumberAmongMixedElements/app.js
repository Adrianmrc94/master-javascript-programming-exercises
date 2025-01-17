function findSmallestNumberAmongMixedElements(arr) {
  // your code here
      // Filtramos solo los elementos que son números
      let numbersArray = arr.filter(element => typeof element === 'number');

      // Si no hay números en el array, retornamos 0
      if (numbersArray.length === 0) {
          return 0;
      }
  
      // Usamos el método reduce para encontrar el número más pequeño
      return numbersArray.reduce((smallest, currentNumber) => {
          return currentNumber < smallest ? currentNumber : smallest;
      });
}

let output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output); // --> 4
