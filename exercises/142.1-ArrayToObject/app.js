function transformFirstAndLast(array) {
  // your code here
    // Usamos el primer y el último elemento del array para formar el objeto
    let obj = {};
    obj[array[0]] = array[array.length - 1]; // primer elemento como key y último como value
    return obj;
}

let arr = ['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce'];
console.log(transformFirstAndLast(arr)); // --> { Queen: "Beyonce" }
