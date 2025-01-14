function computeAverageOfNumbers(numbers) {
    if (numbers.length === 0) {
      return 0;
    }
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
  }
  
  // Ejemplo de uso
  console.log(computeAverageOfNumbers([10, 20, 30]));  // 20