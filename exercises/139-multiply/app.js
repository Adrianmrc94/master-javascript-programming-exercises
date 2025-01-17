function multiply(num1, num2) {
    // your code here
      // Validar que los dos parámetros sean números
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    return NaN;
  }
  
  let result = 0;
  let absoluteNum2 = Math.abs(num2); // Tomamos el valor absoluto de num2
  
  // Usamos suma repetida para realizar la multiplicación
  for (let i = 0; i < absoluteNum2; i++) {
    result += num1;
  }

  // Si num2 es negativo, cambiamos el signo del resultado
  if (num2 < 0 && result !== 0) {
    result = -result;
  }

  return result;
}

let output = multiply(4, 7);
console.log(output); // --> 28
