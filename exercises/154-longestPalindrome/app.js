function findLongestPalindrome(sentence) {
  // your code here
  let longestPalindrome = '';  // Para almacenar el palíndromo más largo

  // Recorremos todas las subcadenas posibles de la oración
  for (let i = 0; i < sentence.length; i++) {
    let word = '';  // Variable que se irá formando con las subcadenas

    // Recorremos a partir de 'i' y vamos extendiendo las subcadenas
    for (let j = i; j < sentence.length; j++) {
      word += sentence[j];  // Añadimos el siguiente carácter a la subcadena

      // Verificamos si la subcadena es un palíndromo y si es más larga que el anterior encontrado
      if (isPalindrome(word) && word.length > longestPalindrome.length) {
        longestPalindrome = word;  // Si lo es, la guardamos como el palíndromo más largo
      }
    }
  }

  return longestPalindrome || '';  // Devuelve el palíndromo más largo encontrado
}

function reverseString(string) {
  // your code here
  return string.split('').reverse().join(''); // Revierte la cadena
}

function isPalindrome(word) {
  // your code here
  return word.length > 1 && word.toLowerCase() === reverseString(word.toLowerCase());
}

let output = findLongestPalindrome("My dad is a racecar athlete");
console.log(output); // --> "a racecar a"
