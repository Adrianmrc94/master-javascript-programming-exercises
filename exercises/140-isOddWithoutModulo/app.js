function isOddWithoutModulo(num) {
    // your code here
    return ((num - 1) / 2) === Math.floor((num - 1) / 2);
}

let output = isOddWithoutModulo(17);
console.log(output); // --> true
