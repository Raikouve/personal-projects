let knightRowPosition = 6;
let knightColumnPosition = 4;

let opponentRowPosition = 4;
let opponentColumnPosition = 3;

let knightCanAttack = false;

if (knightRowPosition - opponentRowPosition === 2 && knightColumnPosition - opponentColumnPosition === 1) {
  knightCanAttack = true;
  console.log('Ataque bem sucedido na diagonal inferior esquerda.');
} else if (knightRowPosition - opponentRowPosition === -2 && knightColumnPosition - opponentColumnPosition === -1) {
  knightCanAttack = true;
  console.log('Ataque bem sucedido na diagonal superior direita.');
} else if (knightRowPosition - opponentRowPosition === 2 && knightColumnPosition - opponentColumnPosition === -1) {
  knightCanAttack = true;
  console.log('Ataque bem sucedido na diagonal inferior direita.');
} else if (knightRowPosition - opponentRowPosition === -2 && knightColumnPosition - opponentColumnPosition === 1) {
  knightCanAttack = true;
  console.log('Ataque bem sucedido na diagonal superior esquerda.');
} else {
  console.log('Deu ruim, não pode atacar');
}
