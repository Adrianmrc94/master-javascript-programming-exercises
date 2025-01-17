function convertObjectToList(obj) {
  // your code here
  let resultArray = [];  // Inicializamos un array vacío para almacenar el resultado
  
  // Usamos un for...in loop para iterar sobre las propiedades del objeto
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {  // Verificamos que la propiedad pertenezca al objeto mismo
      resultArray.push([key, obj[key]]);  // Agregamos un array con la clave y valor
    }
  }
  
  return resultArray;  // Retornamos el array de pares clave-valor
}

let output = convertObjectToList({ name: 'Holly', age: 35, role: 'producer' });
console.log(output); // --> [ ['name', 'Holly'], ['age', 35], ['role', 'producer'] ]
