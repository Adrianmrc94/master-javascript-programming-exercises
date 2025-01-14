function isPersonOldEnoughToDrive(person) {
  // Add your code after this line
  return person.age >= 16;
}

// Ejemplo de uso
const persona1 = {
  name: "Juan",
  age: 20
};

const persona2 = {
  name: "Ana",
  age: 16
};

console.log(isPersonOldEnoughToDrive(persona1)); // true
console.log(isPersonOldEnoughToDrive(persona2)); // false
