function getNthElement(array, n) {
  // Add your code after this line
  return array[n];
}

// Ejemplo de uso
console.log(getNthElement([10, 20, 30, 40], 2));  // 30 (el tercer elemento, ya que la indexación empieza en 0)
console.log(getNthElement([5, 15, 25], 1));  // 15 (el segundo elemento)
console.log(getNthElement([1, 2, 3, 4, 5], 4));  // 5 (el quinto elemento)
console.log(getNthElement([100, 200, 300], 0));  // 100 (el primer elemento)
