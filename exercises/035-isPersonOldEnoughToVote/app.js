function isPersonOldEnoughToVote(person) {
  // Add your code after this line
  return person.age >= 18; // En muchos países la edad mínima para votar es 18
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

console.log(isPersonOldEnoughToVote(persona1)); // true
console.log(isPersonOldEnoughToVote(persona2)); // false
