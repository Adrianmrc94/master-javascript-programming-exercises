function getAllElementsButNth(array, n) {
    // your code here
    // Hacemos una copia del array original para no modificarlo
    let newArray = [...array];
    // Eliminamos el elemento en el índice n usando splice
    newArray.splice(n, 1);
    return newArray;
}

let output = getAllElementsButNth(['a', 'b', 'c'], 1);
console.log(output); // --> ['a', 'c']
