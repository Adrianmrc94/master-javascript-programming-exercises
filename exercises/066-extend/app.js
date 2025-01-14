let obj1 = {
    a: 1,
    b: 2
};
let obj2 = {
    b: 4,
    c: 3
};

function extend(obj1, obj2) {
    // your code here
    for (let key in obj2) {
        // Si la propiedad no existe en obj1, la añadimos
        if (!obj1.hasOwnProperty(key)) {
            obj1[key] = obj2[key];
        }
    }
    return obj1;  // Retorna el objeto modificado
}
let extendedObject = extend(obj1, obj2);
console.log(extendedObject);  // { a: 1, b: 2, c: 3 }