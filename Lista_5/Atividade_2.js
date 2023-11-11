const livro = {
  titulo: 'Diário de um banana',
  autor: 'Jeff Kinney',
  anoPublicacao: 2007,
  genero: 'Comédia',
  disponível: true,
};
for (let i in livro) {
  console.log(`${i} - ${livro[i]}`);
}
livro.emprestarlivro = function () {
  this.disponível = false;
};
livro.emprestarlivro();
console.log(`Livro disponível após emprestimo - ${livro.disponível}`);
