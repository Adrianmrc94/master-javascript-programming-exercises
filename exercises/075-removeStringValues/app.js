function removeStringValues(obj) {
    // your code here
        // Recorremos todas las propiedades del objeto
        for (let key in obj) {
            // Verificamos si el valor es un string
            if (typeof obj[key] === 'string') {
                delete obj[key];  // Eliminamos la propiedad si su valor es un string
            }
        }
        return obj;  // Retornamos el objeto modificado
}

let obj = {
    name: 'Sam',
    age: 20
}

removeStringValues(obj);
console.log(obj); // --> { age: 20 }
