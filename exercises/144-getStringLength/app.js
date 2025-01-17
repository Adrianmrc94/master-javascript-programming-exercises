function getStringLength(string) {
    // your code here
    let count = 0;  // Iniciamos un contador para la longitud
    while (string.substring(count, count + 1) !== "") {  // Verificamos si el siguiente caracter es vacío
      count++;  // Aumentamos el contador
    }
    return count;  // Retornamos la longitud encontrada
}

let output = getStringLength('hello');
console.log(output); // --> 5
