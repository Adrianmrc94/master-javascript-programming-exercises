// Write your function here
function getIndexOf(char, str) {{

    //return str.indexOf(char);  // Retorna la primera posición del caracter en el string
}
    let index = str.indexOf(char);
    
    // Condicional para determinar si el caracter está presente o no
    return index === -1 ? "no se encuentra" : index; 
}


// Ejemplo de uso
let index = getIndexOf('a', 'apple');
console.log(index);  // --> 0

let notFound = getIndexOf('z', 'apple');
console.log(notFound);  // --> -1