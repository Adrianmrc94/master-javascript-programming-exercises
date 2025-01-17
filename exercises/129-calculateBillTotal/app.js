function calculateBillTotal(preTaxAndTipAmount) {
    // your code here
    const taxRate = 0.095; // Impuestos: 9.5%
    const tipRate = 0.15; // Propina: 15%
  
    // Calculamos el impuesto y la propina
    const tax = preTaxAndTipAmount * taxRate;
    const tip = preTaxAndTipAmount * tipRate;
  
    // Retornamos la cantidad total
    return preTaxAndTipAmount + tax + tip;
}

let output = calculateBillTotal(20);
console.log(output); // --> 24.9
