function computeSumOfAllElements(arr) {
  // your code here
      // Si el array está vacío, retornar 0
      if (arr.length === 0) {
        return 0;
    }

    // Usamos el método reduce() para sumar todos los elementos del array
    return arr.reduce((sum, current) => sum + current, 0);
}

let output = computeSumOfAllElements([1, 2, 3])
console.log(output); // --> 6
