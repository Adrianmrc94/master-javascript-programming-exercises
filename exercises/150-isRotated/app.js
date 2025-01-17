function isRotated(str1, str2) {
    // your code here
      // Verificar si ambos strings tienen la misma longitud
  if (str1.length !== str2.length) {
    return false;
  }

  // Verificar si str2 está en str1 concatenado con str1
  return (str1 + str1).includes(str2);
  }
  
  console.log(isRotated('hello world', 'orldhello w')); // --> true
  console.log(isRotated('hello world', 'omrel wp')); // --> false
  
