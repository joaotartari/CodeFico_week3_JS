animalDeEstimacao = {
  nome: 'shing',
  especie: 'cadela',
  idade: 8,
  fazerBarulho: function () {
    console.log(`${this.nome} está latindo!`);
  },
  envelhecer: function () {
    this.idade += 1;
  },
  trocarNome: function (nomeNovo) {
    this.nome = nomeNovo;
  },
};
console.log(`Nome: ${animalDeEstimacao.nome}`);
console.log(`Espécie: ${animalDeEstimacao.especie}`);
console.log(`Idade: ${animalDeEstimacao.idade}`);
animalDeEstimacao.fazerBarulho();
animalDeEstimacao.envelhecer();
console.log(`${animalDeEstimacao.nome} tem ${animalDeEstimacao.idade} anos.`);
animalDeEstimacao.trocarNome('Havana');
animalDeEstimacao.fazerBarulho();
