function getElementOfArrayProperty(obj, key, index) {
    // your code here
    // Verificamos que la propiedad con la key sea un array y el índice esté dentro de los límites del array
    if (Array.isArray(obj[key]) && index >= 0 && index < obj[key].length) {
        return obj[key][index];
    } else {
        return undefined;
    }
}

let obj = {
    key: ['Jamil', 'Albrey']
};
let output = getElementOfArrayProperty(obj, 'key', 0); 
console.log(output); // --> 'Jamil'
