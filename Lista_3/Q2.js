const prompt = require('prompt-sync')();
while (true) {
  let nu = prompt('Digite seu nome de usuário: ');
  if (nu.length < 12) {
    console.log('ERRO! O nome deve ter pelo menos 12 caracteres');
  } else {
    nu = nu.toLowerCase();
    if (nu.indexOf('@') == -1) {
      console.log("ERRO! Usuarios devém conter '@' no seu nome");
    } else if (nu.indexOf('admin') != -1) {
      console.log('ERRO! Usuarios não devém conter admin no seu nome');
    } else if (nu.indexOf('user') == -1) {
      console.log("ERRO! O nome do usuário deve iniciar com 'user'");
    } else {
      console.log(`Nome de Usuário válido! Seu nome de usuário é: ${nu}`);
      break;
    }
  }
}
