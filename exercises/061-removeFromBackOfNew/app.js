function removeFromBackOfNew(arr) {
  // your code here
  return arr.slice(0, arr.length - 1);  // slice obtiene una copia del array, excluyendo el último elemento
}

let arr = [1, 2, 3];
let output = removeFromBackOfNew(arr);
console.log(output); // --> [1, 2]
console.log(arr); // --> [1, 2, 3]
