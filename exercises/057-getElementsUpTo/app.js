function getElementsUpTo(array, n) {
  // your code here
  return array.slice(0, n);  // slice obtiene una copia del array desde el inicio hasta el índice dado, sin incluirlo
}

let output = getElementsUpTo(['a', 'b', 'c', 'd', 'e'], 3) 
console.log(output); // --> ['a', 'b', 'c']
