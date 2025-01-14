function addArrayProperty(obj, key, arr) {
  // Add your code after this line
  obj[key] = arr;
  return obj;
}

// Ejemplo de uso
const persona = {
  name: "Juan",
  age: 30
};

const hobbies = ["leer", "nadar", "viajar"];

console.log(addArrayProperty(persona, "hobbies", hobbies));
// { name: 'Juan', age: 30, hobbies: [ 'leer', 'nadar', 'viajar' ] }
