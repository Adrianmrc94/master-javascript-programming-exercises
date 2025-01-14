function addObjectProperty(obj1, key, obj2) {
  // Add your code after this line
  obj1[key] = obj2;
  return obj1;
}

// Ejemplo de uso
const persona = {
  firstName: "Juan",
  lastName: "Pérez"
};

const direccion = {
  calle: "Calle Falsa",
  ciudad: "Madrid"
};

console.log(addObjectProperty(persona, direccion, "address"));
// {
//   firstName: "Juan",
//   lastName: "Pérez",
//   address: { calle: "Calle Falsa", ciudad: "Madrid" }
// }