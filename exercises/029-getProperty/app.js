function getProperty(obj, key) {
  // your code here
  return obj[key];
}

// Ejemplo de uso
const persona = {
  nombre: "Juan",
  edad: 30,
  ciudad: "Madrid",
};

console.log(getProperty(persona, "nombre")); 
console.log(getProperty(persona, "edad"));  
console.log(getProperty(persona, "ciudad")); 
console.log(getProperty(persona, "pais"));   

