let queenRowPosition = 6;
let queenColumnPosition = 4;

let opponentRowPosition = 5;
let opponentColumnPosition = 5;

let queenCanAttack = false;

if (queenRowPosition === opponentRowPosition || queenColumnPosition === opponentColumnPosition) {
  console.log('ataque bem sucedido na linha ou coluna');
  queenCanAttack = true;
}

for (let index = 1; index < 8; index += 1) {
  let currentQueenRow = queenRowPosition - index;
  let currentQueenColumn = queenColumnPosition - index;

  if (currentQueenRow === 0 || currentQueenColumn === 0) {
    break;
  }

  if (currentQueenRow === opponentRowPosition && currentQueenColumn === opponentColumnPosition) {
    console.log('ataque bem sucedido na diagonal inferior esquerda');
    queenCanAttack = true;
    break;
  }
}

for (let index = 1; index < 8; index += 1) {
  let currentQueenRow = queenRowPosition + index;
  let currentQueenColumn = queenColumnPosition - index;

  if (currentQueenRow > 8 || currentQueenColumn === 0) {
    break;
  }

  if (currentQueenRow === opponentRowPosition && currentQueenColumn === opponentColumnPosition) {
    console.log('ataque bem sucedido na diagonal superior esquerda');
    queenCanAttack = true;
    break;
  }
}

for (let index = 1; index < 8; index += 1) {
  let currentQueenRow = queenRowPosition - index;
  let currentQueenColumn = queenColumnPosition + index;

  if (currentQueenRow === 0 || currentQueenColumn === 9) {
    break;
  }

  if (currentQueenRow === opponentRowPosition && currentQueenColumn === opponentColumnPosition) {
    console.log('ataque bem sucedido na diagonal inferior direita');
    queenCanAttack = true;
    break;
  }
}

for (let index = 1; index < 8; index += 1) {
  let currentQueenRow = queenRowPosition + index;
  let currentQueenColumn = queenColumnPosition + index;

  if (currentQueenRow === 9 || currentQueenColumn === 9) {
    break;
  }

  if (currentQueenRow === opponentRowPosition && currentQueenColumn === opponentColumnPosition) {
    console.log('ataque bem sucedido na diagonal superior direita');
    queenCanAttack = true;
    break;
  }
}

if (queenCanAttack === false) {
  console.log('Deu ruim, não pode atacar');
}