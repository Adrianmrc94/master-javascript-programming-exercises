// Write your function here
function areValidCredentials(username, password) {
    // Verificamos si el nombre tiene más de 3 caracteres y si la contraseña tiene al menos 8 caracteres
    if (username.length > 3 && password.length >= 8) {
        return true;
    } else {
        return false;
    }
}

// Ejemplo de uso
let valid = areValidCredentials("John", "password123");
console.log(valid);  // --> true

let invalid = areValidCredentials("Jo", "pass");
console.log(invalid);  // --> false