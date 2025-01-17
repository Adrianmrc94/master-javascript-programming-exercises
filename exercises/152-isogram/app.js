function isIsogram(text) {
  // your code here
    // Crear un set a partir del texto, lo que elimina las letras repetidas
    let uniqueLetters = new Set(text.toLowerCase()); // Hacemos la comparación insensible a mayúsculas/minúsculas
    return uniqueLetters.size === text.length; // Si el tamaño del set es igual al de la cadena original, es un isograma
  }


console.log(isIsogram("Camile")); // --> true
console.log(isIsogram("Camille")); // --> false
