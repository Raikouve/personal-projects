/* CAVALO */

// Posição do cavalo
let knightRowPosition = 6;
let knightColumnPosition = 4;

/* Posição da peça oponente */
let opponentRowPosition = 4;
let opponentColumnPosition = 3;

// Calculo para entender se o ataque foi bem sucedido ou não

// Se o cavalo esta na mesma linha que a peça oponente OU a cavalo esta na mesma coluna que a peça oponente, significa que o ataque é bem sucedido


if (knightRowPosition - opponentRowPosition === 2 && knightColumnPosition - opponentColumnPosition === 1) {
  console.log('Ataque bem sucedido na diagonal inferior esquerda.');
} else if (knightRowPosition - opponentRowPosition === -2 && knightColumnPosition - opponentColumnPosition === -1) {
  console.log('Ataque bem sucedido na diagonal superior direita.');
} else if (knightRowPosition - opponentRowPosition === 2 && knightColumnPosition - opponentColumnPosition === -1) {
  console.log('Ataque bem sucedido na diagonal inferior direita.');
} else if (knightRowPosition - opponentRowPosition === -2 && knightColumnPosition - opponentColumnPosition === 1) {
  console.log('Ataque bem sucedido na diagonal superior esquerda.');
} else {
  console.log('Deu ruim, não pode atacar');
}
