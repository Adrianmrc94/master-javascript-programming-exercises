// Write your function here
function keep(arr, element) {
    // Filtramos el array, reteniendo solo los elementos que son iguales al valor dado
    return arr.filter(item => item === element);
}

// Ejemplo de uso
let originalArray = [1, 2, 3, 4, 5, 2];
let result = keep(originalArray, 2);
console.log(result);  // --> [2, 2]
