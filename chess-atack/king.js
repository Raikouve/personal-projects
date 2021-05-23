/* REI */

// Posição do rei
let kingRowPosition = 6;
let kingColumnPosition = 4;

/* Posição da peça oponente */
let opponentRowPosition = 7;
let opponentColumnPosition = 3;

// Calculo para entender se o ataque foi bem sucedido ou não

// Se o rei esta na mesma linha que a peça oponente OU o rei esta na mesma coluna que a peça oponente, significa que o ataque é bem sucedido

if (kingRowPosition - opponentRowPosition === 1 && kingColumnPosition - opponentColumnPosition === 1) {
  console.log('Ataque bem sucedido na diagonal inferior esquerda.');
} else if (kingRowPosition - opponentRowPosition === -1 && kingColumnPosition - opponentColumnPosition === -1) {
  console.log('Ataque bem sucedido na diagonal superior direita.');
} else if (kingRowPosition - opponentRowPosition === 1 && kingColumnPosition - opponentColumnPosition === -1) {
  console.log('Ataque bem sucedido na diagonal inferior direita.');
} else if (kingRowPosition - opponentRowPosition === -1 && kingColumnPosition - opponentColumnPosition === 1) {
  console.log('Ataque bem sucedido na diagonal superior esquerda.');
} else if (kingRowPosition - opponentRowPosition === 0 && kingColumnPosition - opponentColumnPosition === -1) {
  console.log('Ataque bem sucedido na linha ou coluna.');
} else if (kingRowPosition - opponentRowPosition === 1 && kingColumnPosition - opponentColumnPosition === 0) {
  console.log('Ataque bem sucedido na linha ou coluna.');
} else if (kingRowPosition - opponentRowPosition === 0 && kingColumnPosition - opponentColumnPosition === 1) {
  console.log('Ataque bem sucedido na linha ou coluna.');
} else if (kingRowPosition - opponentRowPosition === -1 && kingColumnPosition - opponentColumnPosition === 0) {
  console.log('Ataque bem sucedido na linha ou coluna.');
} else {
  console.log('Deu ruim, não pode atacar');
}