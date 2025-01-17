function average(arr) {
  // your code here
    // Calculamos la suma usando la función sum y dividimos entre la longitud del array
    if (arr.length === 0) return 0; // Manejo del caso donde el array esté vacío
    return sum(arr) / arr.length;
}

function sum(arr) {
  // your code here
    // Utilizamos reduce para sumar todos los elementos del array
    return arr.reduce((accumulator, current) => accumulator + current, 0);
}

console.log(average([1, 2])); // --> 1.5
