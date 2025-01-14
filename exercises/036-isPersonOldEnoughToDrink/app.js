function isPersonOldEnoughToDrink(person) {
  // Add your code after this line
  return person.age >= 21;
}

// Ejemplo de uso
const persona1 = {
  name: "Juan",
  age: 25
};

const persona2 = {
  name: "Ana",
  age: 18
};

console.log(isPersonOldEnoughToDrink(persona1)); // true
console.log(isPersonOldEnoughToDrink(persona2)); // false
