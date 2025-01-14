function removeStringValuesLongerThan(num, obj) {
  // your code here
      // Recorremos todas las propiedades del objeto
      for (let key in obj) {
        // Si el valor de la propiedad es un string y su longitud es mayor que 'num'
        if (typeof obj[key] === 'string' && obj[key].length > num) {
            delete obj[key];
        }
    }
    return obj;  // Retornamos el objeto modificado
}

let obj = {
  name: 'Montana',
  age: 20,
  location: 'Texas',
};

removeStringValuesLongerThan(6, obj);
console.log(obj); // { age: 20, location: 'Texas' }
