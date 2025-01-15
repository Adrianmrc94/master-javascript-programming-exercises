// Write your function here
function findMinLengthOfThreeWords(word1, word2, word3) {
    // Usamos Math.min para encontrar la palabra más corta
    return Math.min(word1.length, word2.length, word3.length);
}

// Ejemplo de uso
let result = findMinLengthOfThreeWords('apple', 'dog', 'car');
console.log(result);  // --> 3
