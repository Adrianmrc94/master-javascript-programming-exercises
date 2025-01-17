function computeSummationToN(n) {
  // your code here
    // Inicializamos la suma
    let sum = 0;

    // Iteramos desde 0 hasta n
    for (let i = 0; i <= n; i++) {
      sum += i; // Sumamos el número actual
    }
  
    return sum; // Retornamos la suma acumulada
}

let output = computeSummationToN(6);
console.log(output); // --> 21

