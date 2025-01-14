function getLastElement(array) {
  // Add your code after this line
  return array[array.length - 1];
}
console.log(getLastElement([10, 20, 30, 40]));  // 40
console.log(getLastElement([5, 15, 25]));       // 25
console.log(getLastElement([1, 2, 3]));         // 3
console.log(getLastElement([]));                // undefined (si el array está vacío)