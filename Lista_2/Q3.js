const prompt = require('prompt-sync')();
while (true) {
  let imprimir = prompt('Informe se deseja imprimir um retângulo (s/n):');
  if (imprimir == 'n') {
    break;
  } else if (imprimir == 's') {
    let h = parseInt(prompt('Informe a altura do retângulo: '));
    let w = parseInt(prompt('Informe a largura do retângulo:'));
    if (h <= 0 || w <= 0 || w <= h) {
      console.log('Entrada inválida.');
    } else {
      for (let i = 0; i < h; i++) {
        let result = '';
        for (let j = 0; j < w; j++) {
          result += '*';
        }
        console.log(result);
      }
    }
  } else {
    console.log('Entrada inválida.');
  }
}
