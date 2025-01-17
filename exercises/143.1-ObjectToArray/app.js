function getAllKeys(obj) {
  // your code here
  let keysArray = [];  // Inicializamos un array vacío para almacenar las claves

  // Usamos un for...in loop para iterar sobre las propiedades del objeto
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {  // Aseguramos que la propiedad sea del objeto, no heredada
      keysArray.push(key);  // Añadimos la clave al array
    }
  }

  return keysArray;  // Retornamos el array con las claves
}


let output = getAllKeys({name: "Sam", age: 25, hasPets: true});
console.log(output); // --> [ 'name', 'age', 'hasPets' ]
