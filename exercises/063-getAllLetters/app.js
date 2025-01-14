function getAllLetters(str) {
    // your code here
    return str.split('');  // split convierte el string en un array de caracteres
}

let output = getAllLetters('Radagast');
console.log(output); // --> ['R', 'a', 'd', 'a', 'g', 'a', 's', 't']
