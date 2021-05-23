let kingRowPosition = 6;
let kingColumnPosition = 4;

let opponentRowPosition = 7;
let opponentColumnPosition = 3;

let kingCanAttack = false;

if (kingRowPosition - opponentRowPosition === 1 && kingColumnPosition - opponentColumnPosition === 1) {
  kingCanAttack = true;
  console.log('Ataque bem sucedido na diagonal inferior esquerda.');
} else if (kingRowPosition - opponentRowPosition === -1 && kingColumnPosition - opponentColumnPosition === -1) {
  kingCanAttack = true;
  console.log('Ataque bem sucedido na diagonal superior direita.');
} else if (kingRowPosition - opponentRowPosition === 1 && kingColumnPosition - opponentColumnPosition === -1) {
  kingCanAttack = true;
  console.log('Ataque bem sucedido na diagonal inferior direita.');
} else if (kingRowPosition - opponentRowPosition === -1 && kingColumnPosition - opponentColumnPosition === 1) {
  kingCanAttack = true;
  console.log('Ataque bem sucedido na diagonal superior esquerda.');
} else if (kingRowPosition - opponentRowPosition === 0 && kingColumnPosition - opponentColumnPosition === -1) {
  kingCanAttack = true;
  console.log('Ataque bem sucedido na linha ou coluna.');
} else if (kingRowPosition - opponentRowPosition === 1 && kingColumnPosition - opponentColumnPosition === 0) {
  kingCanAttack = true;
  console.log('Ataque bem sucedido na linha ou coluna.');
} else if (kingRowPosition - opponentRowPosition === 0 && kingColumnPosition - opponentColumnPosition === 1) {
  kingCanAttack = true;
  console.log('Ataque bem sucedido na linha ou coluna.');
} else if (kingRowPosition - opponentRowPosition === -1 && kingColumnPosition - opponentColumnPosition === 0) {
  kingCanAttack = true;
  console.log('Ataque bem sucedido na linha ou coluna.');
} else {
  console.log('Deu ruim, não pode atacar');
}