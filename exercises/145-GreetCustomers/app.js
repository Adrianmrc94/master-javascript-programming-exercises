let customerData = {
  'Joe': {
    visits: 1
  },
  'Carol': {
    visits: 2
  },
  'Howard': {
    visits: 3
  },
  'Carrie': {
    visits: 4
  }
};

function greetCustomer(firstName) {
  let greeting = '';
  // your code here
  // Verificar si el cliente existe en customerData
  if (customerData[firstName]) {
    let visits = customerData[firstName].visits;

    // Si es la primera visita
    if (visits === 1) {
      greeting = `Welcome back, ${firstName}! We're glad you liked us the first time!`;
    } 
    // Si el cliente ha visitado más de una vez
    else {
      greeting = `Welcome back, ${firstName}! So glad to see you again!`;
    }
  } else {
    // Si el cliente no existe, lo tratamos como si fuera la primera vez
    greeting = `Welcome! Is this your first time?`;
  }

  return greeting;
}

console.log(greetCustomer('Joe')); // --> 'Welcome back, Joe! We're glad you liked us the first time!'
