let currentInventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      { name: 'tasselled black low-top lace-up', price: 1000 },
      { name: 'tasselled green low-top lace-up', price: 1100 },
      { name: 'plain beige suede moccasin', price: 950 },
      { name: 'plain olive suede moccasin', price: 1050 }
    ]
  },
  {
    name: 'Gucci',
    shoes: [
      { name: 'red leather laced sneakers', price: 800 },
      { name: 'black leather laced sneakers', price: 900 }
    ]
  }
];

function renderInventory(inventory) {
    // your code here
    // hint: before you just dive into coding...
    // it's a good idea to sketch out a skeleton like you've been seeing earlier in this module...
  // Creamos una matriz que contendrá los zapatos de cada diseñador en un array
  let allShoes = [];
  
  // Recorremos cada diseñador del inventario
  for (let designer of inventory) {
    // Recorremos los zapatos del diseñador
    for (let shoe of designer.shoes) {
      // Incluimos el nombre del diseñador junto con el nombre y precio de cada zapato
      allShoes.push([designer.name, shoe.name, shoe.price]);
    }
  }
  
  return allShoes;
}

console.log(renderInventory(currentInventory))
