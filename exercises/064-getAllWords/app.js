function getAllWords(str) {
    // your code here
    return str.split(' ');  // split divide la oración por los espacios, obteniendo las palabras
}

let output = getAllWords('Radagast the Brown');
console.log(output); // --> ['Radagast', 'the', 'Brown']
