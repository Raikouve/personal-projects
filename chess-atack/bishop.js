/* BISPO */
// Posição da bispo
let bishopRowPosition = 6;
let bishopColumnPosition = 4;

/* Posição da peça oponente */
let opponentRowPosition = 7;
let opponentColumnPosition = 3;

// Pode atacar?
let bishopCanAttack = false;

// Calculo para entender se o ataque foi bem sucedido ou não

// Identificar se a peça do oponente esta na diagonal inferior esquerda
for (let index = 1; index < 8; index += 1) {
  let currentBishopRow = bishopRowPosition - index;
  let currentBishopColumn = bishopColumnPosition - index;

  // Se a posição da linha ou da coluna forem igual a 0, o tabuleiro terminou.
  // Logo, termina o loop

  if (currentBishopRow === 0 || currentBishopColumn === 0) {
    break;
  }

  // Se a posição current de linha E coluna estiverem na mesma posição que a peça oponente
  // Eu posso atacar
  if (currentBishopRow === opponentRowPosition && currentBishopColumn === opponentColumnPosition) {
    console.log('ataque bem sucedido na diagonal inferior esquerda');
    bishopCanAttack = true;
    break;
  }
}

// Identificar se a peça do oponente esta na diagonal superior esquerda
for (let index = 1; index < 8; index += 1) {
  let currentBishopRow = bishopRowPosition + index;
  let currentBishopColumn = bishopColumnPosition - index;

  // Se a posição da linha for maior que 8 OU coluna menor que 1, o tabuleiro terminou
  // Logo, termina o loop
  if (currentBishopRow > 8 || currentBishopColumn === 0) {
    break;
  }

  // Se a posição current de linha E coluna estiverem na mesma posição que a peça oponente
  // Eu posso atacar
  if (currentBishopRow === opponentRowPosition && currentBishopColumn === opponentColumnPosition) {
    console.log('ataque bem sucedido na diagonal superior esquerda');
    bishopCanAttack = true;
    break;
  }
}

// Identificar se a peça do oponente esta na diagonal inferior direita
for (let index = 1; index < 8; index += 1) {
  let currentBishopRow = bishopRowPosition - index;
  let currentBishopColumn = bishopColumnPosition + index;

  // Se a posição da linha for menor que 1 OU coluna maior que 8, o tabuleiro terminou
  // Logo, termina o loop
  if (currentBishopRow === 0 || currentBishopColumn === 9) {
    break;
  }

  // Se a posição current de linha E coluna estiverem na mesma posição que a peça oponente
  // Eu posso atacar
  if (currentBishopRow === opponentRowPosition && currentBishopColumn === opponentColumnPosition) {
    console.log('ataque bem sucedido na diagonal inferior direita');
    bishopCanAttack = true;
    break;
  }
}

// Identificar se a peça do oponente esta na diagonal superior direita
for (let index = 1; index < 8; index += 1) {
  let currentBishopRow = bishopRowPosition + index;
  let currentBishopColumn = bishopColumnPosition + index;

  // Se a posição da linha for maior que 8 OU coluna maior que 8, o tabuleiro terminou
  // Logo, termina o loop
  if (currentBishopRow === 9 || currentBishopColumn === 9) {
    break;
  }

  // Se a posição current de linha E coluna estiverem na mesma posição que a peça oponente
  // Eu posso atacar
  if (currentBishopRow === opponentRowPosition && currentBishopColumn === opponentColumnPosition) {
    console.log('ataque bem sucedido na diagonal superior direita');
    bishopCanAttack = true;
    break;
  }
}

if (bishopCanAttack === false) {
  console.log('Deu ruim, não pode atacar');
}