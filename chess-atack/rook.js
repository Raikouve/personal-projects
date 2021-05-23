let towerRowPosition = 1;
let towerColumnPosition = 3;

let opponentRowPosition = 1;
let opponentColumnPosition = 8;

let towerCanAttack = false;

if (towerRowPosition === opponentRowPosition || towerColumnPosition === opponentColumnPosition) {
  console.log('ataque bem sucedido na linha ou coluna');
  towerCanAttack = true;
} else {
  console.log('Deu ruim, não pode atacar');
}