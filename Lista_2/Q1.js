const prompt = require('prompt-sync')();
const n1 = parseInt(prompt('Digite o primeiro número: '));
const n2 = parseInt(prompt('Digite o segundo número: '));
let result = 0;
for (let c = 0; c < n2; c++) {
  result += n1;
}
console.log(`A multiplicação de ${n1} por ${n2} é ${result}`);
