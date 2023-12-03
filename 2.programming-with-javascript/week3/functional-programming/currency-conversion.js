// functional programming
// currency conversion

var currencyOne = 100;
var currencyTwo = 0;
var exchangeRate = 1.2;

function convertCurrency(amount, exchangeRate) {
  return amount * exchangeRate;
}

currencyTwo = convertCurrency(currencyOne, exchangeRate);
console.log(currencyTwo); // 120
