function computeCompoundInterest(principal, interestRate, compoundingFrequency, timeInYears) {
  // your code here
    // Calcular el monto total después de la capitalización
    const totalAmount = principal * Math.pow((1 + interestRate / compoundingFrequency), compoundingFrequency * timeInYears);
  
    // Calcular el interés compuesto generado
    const compoundInterest = totalAmount - principal;
    
    return compoundInterest;
}

let output = computeCompoundInterest(1500, .043, 4, 6);
console.log(output); // --> 438.83682213410543
