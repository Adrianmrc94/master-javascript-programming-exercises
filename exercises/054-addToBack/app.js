function addToBack(arr, element) {
  // your code here
  arr.push(element);  // El método push agrega un elemento al final del array
  return arr;
}

let output = addToBack([1, 2], 3);
console.log(output); // -> [1, 2, 3]
