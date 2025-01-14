function isEitherEvenOrAreBoth7(num1, num2) {
    // your code here
    return (num1 % 2 === 0 || num2 % 2 === 0) || (num1 === 7 && num2 === 7);
}

// Ejemplo de uso
console.log(isEitherEvenOrAreBoth7(4, 3));  // true (el primer número es par)
console.log(isEitherEvenOrAreBoth7(7, 7));  // true (ambos son 7)
console.log(isEitherEvenOrAreBoth7(3, 3));  // false (ninguno es par ni ambos son 7)
console.log(isEitherEvenOrAreBoth7(2, 8));  // true (ambos números son pares)

