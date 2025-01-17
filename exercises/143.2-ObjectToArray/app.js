function listAllValues(obj) {
  // your code here
  let valuesArray = [];  // Inicializamos un array vacío para almacenar los valores
  
  // Usamos un for...in loop para iterar sobre las propiedades del objeto
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {  // Aseguramos que la propiedad sea del objeto, no heredada
      valuesArray.push(obj[key]);  // Añadimos el valor correspondiente a la propiedad al array
    }
  }
  
  return valuesArray;  // Retornamos el array con los valores
}

let output = listAllValues({ name: 'Sam', age: 25, hasPets: true });
console.log(output); // --> [ 'Sam', 25, true ]
