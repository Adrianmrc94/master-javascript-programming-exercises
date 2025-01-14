function getElementsAfter(array, n) {
  // your code here
  return array.slice(n + 1);  // slice obtiene una copia del array desde el índice + 1 hasta el final
}

let output = getElementsAfter(['a', 'b', 'c', 'd', 'e'], 2); 
console.log(output); // --> ['d', 'e']
