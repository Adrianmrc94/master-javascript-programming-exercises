function squareElements(arr) {
  // your code here
  return arr.map(element => element * element);
}

let output = squareElements([1, 2, 3]);
console.log(output); // --> [1, 4, 9]
