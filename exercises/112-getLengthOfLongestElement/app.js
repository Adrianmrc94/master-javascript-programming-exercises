function getLengthOfLongestElement(arr) {
    // Your code here
        // Usamos reduce para encontrar el elemento más largo en el array
        return arr.reduce((maxLength, currentElement) => {
            return Math.max(maxLength, currentElement.length);
        }, 0);
}

let output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // --> 5
