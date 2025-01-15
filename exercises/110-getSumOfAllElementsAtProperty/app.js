function getSumOfAllElementsAtProperty(obj, key) {
    // your code here
        // Verificamos si la propiedad existe y es un array
        if (Array.isArray(obj[key])) {
            // Sumamos todos los elementos del array
            return obj[key].reduce((sum, element) => sum + element, 0);
        }
        // Si no es un array o no existe, retornamos 0
        return 0;
}

let obj = {
    key: [4, 1, 8]
};
let output = getSumOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 13
