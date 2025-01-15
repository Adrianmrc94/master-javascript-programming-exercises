// Write your function here
function findMaxLengthOfThreeWords(word1, word2, word3) {
    // Usamos Math.max para encontrar la palabra más larga
    return Math.max(word1.length, word2.length, word3.length);
}

// Ejemplo de uso
let result = findMaxLengthOfThreeWords('apple', 'dog', 'elephant');
console.log(result);  // --> 8
