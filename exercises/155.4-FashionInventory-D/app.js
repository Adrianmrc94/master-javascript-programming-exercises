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

function getLaceNameDataForShoes(inventory) {
    // your code here
    let result = [];

    // Recorrer cada diseñador en el inventario
    for (let designer of inventory) {
        // Recorrer los zapatos de cada diseñador
        for (let shoe of designer.shoes) {
            // Verificar si el nombre del zapato contiene "lace" o "laced"
            if (shoe.name.includes("lace")) {
                // Separar las palabras del nombre del zapato
                let words = shoe.name.split(" ");

                // Encontrar el índice de la palabra "lace" o "laced"
                let targetWordIndex = words.findIndex(word => word.includes("lace"));

                // Crear el objeto con las palabras y el índice
                result.push({
                    nameWords: words,
                    targetWordIndex: targetWordIndex
                });
            }
        }
    }

    return result;
}

console.log(getLaceNameDataForShoes(currentInventory));
