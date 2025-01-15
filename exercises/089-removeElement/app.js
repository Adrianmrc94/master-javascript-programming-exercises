// Write your function here
function removeElement(arr, element) {
    // Filtramos el array, eliminando los elementos que coinciden con 'element'
    return arr.filter(item => item !== element);
}

// Ejemplo de uso
let originalArray = [1, 2, 3, 4, 5, 2];
let result = removeElement(originalArray, 2);
console.log(result);  // --> [1, 3, 4, 5]
