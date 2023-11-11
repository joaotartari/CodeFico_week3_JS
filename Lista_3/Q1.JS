const prompt = require('prompt-sync')();
const email = prompt('Digite seu email: ');
const i = email.indexOf('@gmail.com');
if (i != -1) {
  console.log("O e-mail contém o domínio '@gmail.com'.");
  email.slice(0, i - 1);
} else {
  console.log("O e-mail não contém o domínio '@gmail.com'.");
  console.log(
    `O e-mail contém o domínio: ${email.slice(
      email.indexOf('@'),
      email.length
    )}`
  );
}
