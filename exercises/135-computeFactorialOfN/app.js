function computeFactorialOfN(n) {
    // your code here
      // Verificar que n sea un número natural
  if (n <= 0 || !Number.isInteger(n)) {
    return "Invalid input";
  }

  let factorial = 1; // Inicializar el factorial
  for (let i = 1; i <= n; i++) {
    factorial *= i; // Multiplicar acumulativamente
  }
  return factorial;
}

let output = computeFactorialOfN(4);
console.log(output); // --> 24
