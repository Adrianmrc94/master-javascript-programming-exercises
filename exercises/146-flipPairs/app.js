function flipPairs(input) {
    // your code here
    let result = ''; // String para guardar el resultado

    // Iteramos sobre el string de dos en dos caracteres
    for (let i = 0; i < input.length; i += 2) {
      // Tomamos los dos caracteres actuales
      let firstChar = input[i];
      let secondChar = input[i + 1];
  
      // Si hay un segundo carácter (i + 1 dentro del rango), los invertimos
      if (secondChar !== undefined) {
        result += secondChar + firstChar;
      } else {
        // Si es un solo carácter al final del string (caso de longitud impar)
        result += firstChar;
      }
    }
  
    return result;
}

let input = "Can you see what this is about?";
let output = flipPairs(input);
console.log(output); // --> aC noy ues ehwtat ih ssia obtu?
