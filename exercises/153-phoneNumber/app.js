function PhoneNumberFormatter(numbers) {
  this.numbers = numbers;
}

PhoneNumberFormatter.prototype.render = function() {
  let string = '';
  // your code here
  string += this.parenthesize(this.getAreaCode()) + ' ';
  string += this.getExchangeCode() + '-';
  string += this.getLineNumber();
  
  return string;
};

PhoneNumberFormatter.prototype.getAreaCode = function() {
  // your code here
  return this.slice(0, 3); // Obtener los primeros 3 números
};

PhoneNumberFormatter.prototype.getExchangeCode = function() {
  // your code here
  return this.slice(3, 6); // Obtener los siguientes 3 números
};

PhoneNumberFormatter.prototype.getLineNumber = function() {
  // your code here
  return this.slice(6, 10); // Obtener los últimos 4 números
};

PhoneNumberFormatter.prototype.parenthesize = function(string) {
  return '(' + string + ')';
};

PhoneNumberFormatter.prototype.slice = function(start, end) {
  return this.numbers.slice(start, end).join('');
};

let number = new PhoneNumberFormatter([6,5,0,8,3,5,9,1,7,2]);
console.log(number.render()); // --> "(650) 835-9172"
