const prompt = require('prompt-sync')();
let c = 0;
let soma = 0;
while (true) {
  let number = parseInt(prompt('Digite um número (0 para sair): '));
  if (number == 0 && c == 0) {
    console.log(`A média é 0`);
    break;
  } else if (number == 0) {
    console.log(`A média é ${soma / c}`);
    break;
  } else {
    c++;
    soma += number;
  }
}
