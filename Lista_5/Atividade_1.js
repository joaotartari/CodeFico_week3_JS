//step 1
const pessoa = {};

//step 2
pessoa.nome = 'João';
pessoa.idade = 22;

//step 3
console.log(`Nome: ${pessoa.nome}`);
console.log(`Idade: ${pessoa.idade}`);

//step 4
pessoa.idade = 23;
console.log(`Idade atualizada: ${pessoa.idade}`);

//step 5
const pessoa2 = { nome: 'Victor', idade: 24 };

//step 6
for (let i in pessoa2) {
  console.log(`${i} - ${pessoa2[i]}`);
}

//step 7
pessoa2.apresentacao = function () {
  console.log(`Olá meu nome é ${this.nome}.`);
};
pessoa2.apresentacao();

//step 8
pessoa.email = 'joaotartari@codefico.com.br';
console.log(`E-mail: ${pessoa.email}`);
