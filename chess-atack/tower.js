/* TORRE */

/* Posição da torre */
let towerRowPosition = 1;
let towerColumnPosition = 3;

/* Posição da peça oponente */
let opponentRowPosition = 1;
let opponentColumnPosition = 8;

/* Pode atacar? */
let towerCanAttack = false;

// Calculo para entender se o ataque foi bem sucedido ou não

// Se a torre está na mesma linha que a peça oponente OU a torre esta na mesma coluna que a peça oponente, significa que o ataque é bem sucedido

if (towerRowPosition === opponentRowPosition || towerColumnPosition === opponentColumnPosition) {
  console.log('ataque bem sucedido na linha ou coluna');
  towerCanAttack = true;
} else {
  console.log('Deu ruim, não pode atacar');
}