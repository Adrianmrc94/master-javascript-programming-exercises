function modulo(num1, num2) {
    // your code here
      // Validar que ambos num1 y num2 son números
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    return NaN;
  }

      // Validar divisor para evitar división por 0
  if (num2 === 0) {
    return "Divisor cannot be zero";
  }
  // Determinar el signo de num1
  const isNegative = num1 < 0;

  // Calcular el valor absoluto del dividendo y divisor
  let dividend = Math.abs(num1);
  const divisor = Math.abs(num2);

  // Restar iterativamente el divisor hasta que el dividendo sea menor que el divisor
  while (dividend >= divisor) {
    dividend -= divisor;
  }

  // Si el número original era negativo, devolver el residuo como negativo
  return isNegative ? -dividend : dividend;
}


let output = modulo(25, 4);
console.log(output); // --> 1
