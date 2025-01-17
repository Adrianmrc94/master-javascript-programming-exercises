function computeSumBetween(num1, num2) {
    // your code here
  // Si num2 es menor o igual que num1, no hay números en el rango válido
  if (num2 <= num1) {
    return 0;
  }

  let sum = 0; // Inicializamos la suma

  // Iteramos desde num1 hasta num2 (excluyendo num2)
  for (let i = num1; i < num2; i++) {
    sum += i; // Sumamos cada número al acumulador
  }

  return sum; // Retornamos la suma
}

let output = computeSumBetween(2, 5);
console.log(output); // --> 9
