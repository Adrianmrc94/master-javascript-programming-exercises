function addToFront(arr, element) {
  // your code here
  arr.unshift(element);  // Unshift agrega un elemento al inicio del array
  return arr;
}

let output = addToFront([1, 2], 3);
console.log(output); // -> [3, 1, 2]
