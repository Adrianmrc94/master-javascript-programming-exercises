function addProperty(obj, key) {
  // your code here
  
 obj[key] = true;
return obj;
}

// Ejemplo de uso
const persona = {
nombre: "Juan",
edad: 30,
};

console.log(addProperty(persona, "esEstudiante")); 
// { nombre: 'Juan', edad: 30, esEstudiante: true }

console.log(addProperty(persona, "activo")); 
// { nombre: 'Juan', edad: 30, esEstudiante: true, activo: true }
