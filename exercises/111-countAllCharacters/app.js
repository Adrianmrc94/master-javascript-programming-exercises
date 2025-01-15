// Write your function here
function countAllCharacters(str) {
    // Creamos un objeto vacío
    const charCount = {};

    // Recorremos cada carácter del string
    for (let char of str) {
        // Si el carácter ya está en el objeto, incrementamos su valor
        if (charCount[char]) {
            charCount[char]++;
        } else {
            // Si no está en el objeto, lo agregamos con valor 1
            charCount[char] = 1;
        }
    }

    return charCount;
}

// Ejemplo de uso:
let str = "hello";
console.log(countAllCharacters(str));  
// --> { h: 1, e: 1, l: 2, o: 1 }
