function flipEveryNChars(input, n) {
    // your code here
    let result = '';

    // Recorremos el string en bloques de tamaño n
    for (let i = 0; i < input.length; i += n) {
      // Obtenemos el bloque de tamaño n (puede ser más pequeño si llegamos al final)
      let chunk = input.slice(i, i + n);
      
      // Invertimos el bloque y lo agregamos al resultado
      result += chunk.split('').reverse().join('');
    }
  
    return result;
}

let input = 'a short example';
let output = flipEveryNChars(input, 5);
console.log(output); // --> ohs axe trelpma
