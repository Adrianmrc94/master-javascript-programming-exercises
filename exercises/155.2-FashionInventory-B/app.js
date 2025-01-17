let currentInventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      { name: 'tasselled black low-top lace-up', price: 1000 },
      { name: 'tasselled green low-top lace-up', price: 1100 },
      { name: 'plain beige suede moccasin', price: 950 },
      { name: 'plain olive suede moccasin', price: 1050 },
    ],
  },
  {
    name: 'Gucci',
    shoes: [
      { name: 'red leather laced sneakers', price: 800 },
      { name: 'black leather laced sneakers', price: 900 },
    ],
  },
];

function renderAverageCostPerDesigner(inventory) {
    // your code here
    // Creamos un array para almacenar los resultados
    let averageCostArray = [];
  
    // Recorremos cada diseñador en el inventario
    for (let designer of inventory) {
      // Calculamos el total del costo de los zapatos de este diseñador
      let totalCost = 0;
      let totalShoes = designer.shoes.length;
      
      // Sumamos el precio de cada zapato
      for (let shoe of designer.shoes) {
        totalCost += shoe.price;
      }
      
      // Calculamos el precio promedio
      let averagePrice = totalCost / totalShoes;
      
      // Almacenamos el resultado para cada diseñador
      averageCostArray.push({
        name: designer.name,
        averagePrice: averagePrice
      });
    }
    
    return averageCostArray;
}

console.log(renderAverageCostPerDesigner(currentInventory));
