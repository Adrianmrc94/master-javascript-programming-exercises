let currentInventory = [
    {
      name: 'Brunello Cucinelli',
      shoes: [
        {name: 'tasselled black low-top lace-up', price: 1000},
        {name: 'tasselled green low-top lace-up', price: 1100},
        {name: 'plain beige suede moccasin', price: 950},
        {name: 'plain olive suede moccasin', price: 1050}
      ]
    },
    {
      name: 'Gucci',
      shoes: [
        {name: 'red leather laced sneakers', price: 800},
        {name: 'black leather laced sneakers', price: 900}
      ]
    }
  ];

function renderInventory(shoeList) {
    // your code here
        // Creamos un array vacío donde almacenaremos el resultado
        let result = [];
    
        // Recorremos el inventario de diseñadores
        for (let designer of shoeList) {
            // Filtramos los zapatos de la marca que contienen la palabra "black"
            let blackShoes = designer.shoes.filter(shoe => shoe.name.includes("black"));
            
            // Agregamos cada zapato filtrado en el formato correcto
            for (let shoe of blackShoes) {
                result.push([designer.name, shoe.name, shoe.price]);
            }
        }
    
        return result;
}

console.log(renderInventory(currentInventory));
