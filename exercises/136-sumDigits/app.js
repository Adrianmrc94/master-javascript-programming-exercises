function sumDigits(num) {
    // your code here
    let numStr = num.toString(); // Convertir el número a string
    let sum = 0;
  
    if (num < 0) {
      // Si el número es negativo, el primer dígito (sin el signo) se suma como negativo
      sum += -parseInt(numStr[1], 10); // Convertir el segundo carácter (el primer dígito real) como negativo
      numStr = numStr.slice(2); // Eliminar el signo y el primer dígito procesado
    }
  
    for (let char of numStr) {
      sum += parseInt(char, 10); // Convertir cada carácter a número y sumarlo
    }
  
    return sum;
}

let output = sumDigits(-316);
console.log(output); // --> 4
