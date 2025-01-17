function multiplyBetween(num1, num2) {
    // your code here
  // Si num2 es menor o igual que num1, no hay números en el rango válido
  if (num2 <= num1) {
    return 0;
  }

  let product = 1; // Inicializamos el producto

  // Iteramos desde num1 hasta num2 (excluyendo num2)
  for (let i = num1; i < num2; i++) {
    product *= i;
  }

  return product; // Retornamos el producto
}

let output = multiplyBetween(2, 5);
console.log(output); // --> 24
