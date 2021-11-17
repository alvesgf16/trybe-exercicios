// Parte I - Objetos e For/In
// Usando o objeto abaixo, faça os exercícios a seguir:

const info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

info.recorrente = 'Sim';

// 5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves.
const info2 = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dell\'s Four Color Comics #178',
  nota: 'O último MacPatinhas',
  recorrente: 'Não',
};

for (const key in info) {
  if (key !== 'recorrente') {
    console.log(`${info[key]} e ${info2[key]}`);
  }
}

if (info.recorrente === 'Sim' && info2.recorrente === 'Sim') {
  console.log('Ambos recorrentes'); 
} else {
  console.log(`${info.recorrente} e ${info2.recorrente}`);
}