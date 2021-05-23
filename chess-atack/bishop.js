let bishopRowPosition = 6;
let bishopColumnPosition = 4;

let opponentRowPosition = 7;
let opponentColumnPosition = 3;

let bishopCanAttack = false;

for (let index = 1; index < 8; index += 1) {
  let currentBishopRow = bishopRowPosition - index;
  let currentBishopColumn = bishopColumnPosition - index;

  if (currentBishopRow === 0 || currentBishopColumn === 0) {
    break;
  }

  if (currentBishopRow === opponentRowPosition && currentBishopColumn === opponentColumnPosition) {
    console.log('ataque bem sucedido na diagonal inferior esquerda');
    bishopCanAttack = true;
    break;
  }
}

for (let index = 1; index < 8; index += 1) {
  let currentBishopRow = bishopRowPosition + index;
  let currentBishopColumn = bishopColumnPosition - index;

  if (currentBishopRow > 8 || currentBishopColumn === 0) {
    break;
  }

  if (currentBishopRow === opponentRowPosition && currentBishopColumn === opponentColumnPosition) {
    console.log('ataque bem sucedido na diagonal superior esquerda');
    bishopCanAttack = true;
    break;
  }
}

for (let index = 1; index < 8; index += 1) {
  let currentBishopRow = bishopRowPosition - index;
  let currentBishopColumn = bishopColumnPosition + index;

  if (currentBishopRow === 0 || currentBishopColumn === 9) {
    break;
  }

  if (currentBishopRow === opponentRowPosition && currentBishopColumn === opponentColumnPosition) {
    console.log('ataque bem sucedido na diagonal inferior direita');
    bishopCanAttack = true;
    break;
  }
}

for (let index = 1; index < 8; index += 1) {
  let currentBishopRow = bishopRowPosition + index;
  let currentBishopColumn = bishopColumnPosition + index;

  if (currentBishopRow === 9 || currentBishopColumn === 9) {
    break;
  }

  if (currentBishopRow === opponentRowPosition && currentBishopColumn === opponentColumnPosition) {
    console.log('ataque bem sucedido na diagonal superior direita');
    bishopCanAttack = true;
    break;
  }
}

if (bishopCanAttack === false) {
  console.log('Deu ruim, não pode atacar');
}