function getLargestElement(arr) {
  // your code here
      // Si el array está vacío, retorna 0
      if (arr.length === 0) {
        return 0;
    }

    // Usamos Math.max() con el operador de propagación para encontrar el mayor número
    return Math.max(...arr);
}

let output = getLargestElement([5, 2, 8, 3]);
console.log(output); // --> 8;