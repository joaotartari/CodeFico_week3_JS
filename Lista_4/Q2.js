let numeros = [1, 2, 7, 14, 5, 0, 10, 23, 13, 17, 8, 19];
//1
function ehPrimo(number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i < Math.sqrt(number); i++) {
    if (number % i == 0) {
      return false;
    }
  }
  return true;
}

//2
let NumerosPrimos = numeros.filter(ehPrimo);
console.log('Números primos do Array:');
console.log(NumerosPrimos);

//3
let quadradoDosPrimos = NumerosPrimos.map((numero) => numero ** 2);
console.log('Array do quadrado dos números primos:');
console.log(quadradoDosPrimos);
