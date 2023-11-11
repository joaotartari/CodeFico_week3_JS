const prompt = require('prompt-sync')();
let texto = prompt('Digite um texto: ');
let result = '';
for (let i = texto.length - 1; i >= 0; i--) {
  result += texto[i];
}
console.log(result);
