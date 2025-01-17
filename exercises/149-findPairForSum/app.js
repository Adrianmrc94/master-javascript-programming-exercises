function findPairForSum(array, number) {
  // your code here
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === number) {
        return [array[i], array[j]];  // Retornar el par de números
      }
    }
  }
  return null;  // Si no se encuentra ningún par
}

let pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
console.log(pair); // --> [4, 5]
