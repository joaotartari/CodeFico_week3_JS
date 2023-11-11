let tarefas = [
  'Estudar JavaScript',
  'Fazer exercícios de arrays',
  'Preparar apresentação',
  'Enviar relatório',
  'Terminar modulo 4 - Feito',
  'Aprender html e css - Feito',
];
//1
console.log('Tarefas:');
for (let i = 0; i < tarefas.length; i++) {
  console.log(`${i + 1} - ${tarefas[i]}`);
}

//2
console.log('Tarefas Pendentes:');
let TarefasPendentes = tarefas.filter((tarefa) => !tarefa.includes('Feito'));
console.log(TarefasPendentes);

//3
console.log('Tarefas Ordenadas:');
let TarefasOrdendas = tarefas.sort();
console.log(TarefasOrdendas);

//4
console.log('Primeiras Tarefas:');
let PrimeirasTarefas = tarefas.slice(0, 2);
console.log(PrimeirasTarefas);

//5
tarefas.pop();
console.log('Array atualizado:');
console.log(tarefas);

//6
tarefas.push('Ler livro novo');
console.log('Array atualizado:');
console.log(tarefas);
