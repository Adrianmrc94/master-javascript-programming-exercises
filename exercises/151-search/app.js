function search(array, value) {
  // your code here
  let start = 0;
  let end = array.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (array[mid] === value) {
      return mid; // Encontramos el elemento, retornamos la posición
    }
    
    if (array[mid] < value) {
      start = mid + 1; // El valor está en la mitad superior
    } else {
      end = mid - 1; // El valor está en la mitad inferior
    }
  }

  return null; // Si llegamos aquí, el valor no está en el array
}

let arr = [1, 3, 16, 22, 31, 33, 34]
console.log(search(arr, 31)); // --> 4
