function addFullNameProperty(obj) {
  // Add your code after this line
  obj.fullName = obj.firstName + " " + obj.lastName;
  return obj;
}

// Ejemplo de uso
const persona = {
  firstName: "Juan",
  lastName: "Pérez",
};

addFullNameProperty(persona);
console.log(persona);
// { firstName: 'Juan', lastName: 'Pérez', fullName: 'Juan Pérez' }
