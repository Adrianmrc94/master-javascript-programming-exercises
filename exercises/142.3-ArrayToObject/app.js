function transformEmployeeData(array) {
  // your code here
    // Creamos un objeto vacío para almacenar los datos transformados
    let employeeObject = {};

    // Recorremos el array de entradas, que contiene pares [key, value]
    for (let i = 0; i < array.length; i++) {
      let key = array[i][0];  // La primera posición de cada sub-array es la clave
      let value = array[i][1];  // La segunda posición de cada sub-array es el valor
  
      employeeObject[key] = value;  // Asignamos el valor correspondiente a la clave en el objeto
    }
  
    return employeeObject;  // Retornamos el objeto generado con los datos de empleados
  }
  
  // Ejemplo de uso:
  let employeeData = [
    ["name", "John"],
    ["age", 30],
    ["role", "Developer"],
    ["salary", 50000],
    ["tshirtSize", "L"]  // Agregar un campo nuevo
  ];
  
  let employeeObject = transformEmployeeData(employeeData);
  console.log(employeeObject);
  // Salida esperada: 
  // { name: "John", age: 30, role: "Developer", salary: 50000, tshirtSize: "L" }

