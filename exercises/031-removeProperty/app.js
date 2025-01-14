function removeProperty(obj, key) {
  // your code here
  delete obj[key];
  return obj;
}

// Ejemplo de uso
const persona = {
  nombre: "Juan",
  edad: 30,
  ciudad: "Madrid",
};

console.log(removeProperty(persona, "ciudad"));
// { nombre: 'Juan', edad: 30 }

console.log(removeProperty(persona, "edad"));
// { nombre: 'Juan' }

