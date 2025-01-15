function computeProductOfAllElements(arr) {
  // your code here
  if (arr.length === 0) return 0;  // Si el array está vacío, retorna 0
  return arr.reduce((product, currentValue) => product * currentValue, 1);
}

let output = computeProductOfAllElements([2, 5, 6]);
console.log(output); // --> 60
