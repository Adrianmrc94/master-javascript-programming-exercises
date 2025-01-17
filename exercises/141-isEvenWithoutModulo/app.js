function isEvenWithoutModulo(num) {
    // your code here
    return (num/ 2) === Math.floor(num / 2);
}

let output = isEvenWithoutModulo(8);
console.log(output); // --> true
