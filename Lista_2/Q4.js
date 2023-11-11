const prompt = require('prompt-sync')();
const number = parseInt(prompt('Digite um número inteiro positivo: '));
if (number <= 0) {
  console.log('Nenhum número na sequência.');
} else {
  switch (number) {
    case 1:
      console.log('Sequência de Fibonacci até 1:');
      console.log('0');
      break;
    case 2:
      console.log('Sequência de Fibonacci até 2:');
      console.log('0, 1');
      break;
    default:
      let first = 0;
      let second = 1;
      let result = '0, 1';
      for (let i = 3; i <= number; i++) {
        let third = first + second;
        result += `, ${third}`;
        first = second;
        second = third;
      }
      console.log(`Sequência de Fibonacci até ${number}:`);
      console.log(result);
      break;
  }
}
