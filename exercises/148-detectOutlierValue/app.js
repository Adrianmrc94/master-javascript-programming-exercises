function detectOutlierValue(string) {
    // your code here
    let numbers = string.split(" ").map(Number);
  
    // Detectar si la mayoría son pares o impares
    let evenCount = 0;
    let oddCount = 0;
  
    // Contamos cuántos números pares y cuántos impares hay
    for (let num of numbers) {
      if (num % 2 === 0) {
        evenCount++;
      } else {
        oddCount++;
      }
    }
  
    // Dependiendo de qué tipo de número predomina, buscamos el outlier
    let isOutlierOdd = oddCount === 1; // Si hay solo un número impar, será el outlier
    let isOutlierEven = evenCount === 1; // Si hay solo un número par, será el outlier
  
    // Buscamos el número outlier
    for (let i = 0; i < numbers.length; i++) {
      if (isOutlierOdd && numbers[i] % 2 !== 0) {
        return i + 1; // Índice comenzando desde 1
      }
      if (isOutlierEven && numbers[i] % 2 === 0) {
        return i + 1; // Índice comenzando desde 1
      }
    }
}

// Third number is odd, while the rest of the numbers are even
console.log(detectOutlierValue("2 4 7 8 10")); // --> 3 

// Second number is even, while the rest of the numbers are odd
console.log(detectOutlierValue("1 10 1 1"))  // --> 2
