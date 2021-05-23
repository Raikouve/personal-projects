let pawnRowPosition = 6;
let pawnColumnPosition = 4;

let opponentRowPosition = 7;
let opponentColumnPosition = 3;

let pawnCanAttack = false;

if (pawnRowPosition - opponentRowPosition === -1 && pawnColumnPosition - opponentColumnPosition === -1) {
  pawnCanAttack = true;
  console.log('Ataque bem sucedido na diagonal superior direita.');
} else if (pawnRowPosition - opponentRowPosition === -1 && pawnColumnPosition - opponentColumnPosition === 1) {
  pawnCanAttack = true;
  console.log('Ataque bem sucedido na diagonal superior esquerda.');
}  else {
  console.log('Deu ruim, não pode atacar.');
}