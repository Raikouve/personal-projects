/* PEÃO */
// Posição da peão
let pawnRowPosition = 6;
let pawnColumnPosition = 4;

/* Posição da peça oponente */
let opponentRowPosition = 7;
let opponentColumnPosition = 3;

// Pode atacar?
let pawnCanAttack = false;

// Calculo para entender se o ataque foi bem sucedido ou não

// Identificar se a peça do oponente esta na diagonal inferior esquerda
for (let index = 1; index < 8; index += 1) {
  let currentPawnRow = pawnRowPosition - index;
  let currentPawnColumn = pawnColumnPosition - index;

  // Se a posição da linha ou da coluna forem igual a 0, o tabuleiro terminou.
  // Logo, termina o loop

  if (currentPawnRow === 0 || currentPawnColumn === 0) {
    break;
  }

  // Se a posição current de linha E coluna estiverem na mesma posição que a peça oponente
  // Eu posso atacar
  if (currentPawnRow === opponentRowPosition && currentPawnColumn === opponentColumnPosition) {
    console.log('ataque bem sucedido na diagonal inferior esquerda');
    pawnCanAttack = true;
    break;
  }
}

// Identificar se a peça do oponente esta na diagonal superior esquerda
for (let index = 1; index < 8; index += 1) {
  let currentPawnRow = pawnRowPosition + index;
  let currentPawnColumn = pawnColumnPosition - index;

  // Se a posição da linha for maior que 8 OU coluna menor que 1, o tabuleiro terminou
  // Logo, termina o loop
  if (currentPawnRow > 8 || currentPawnColumn === 0) {
    break;
  }

  // Se a posição current de linha E coluna estiverem na mesma posição que a peça oponente
  // Eu posso atacar
  if (currentPawnRow === opponentRowPosition && currentPawnColumn === opponentColumnPosition) {
    console.log('ataque bem sucedido na diagonal superior esquerda');
    pawnCanAttack = true;
    break;
  }
}

// Identificar se a peça do oponente esta na diagonal inferior direita
for (let index = 1; index < 8; index += 1) {
  let currentPawnRow = pawnRowPosition - index;
  let currentPawnColumn = pawnColumnPosition + index;

  // Se a posição da linha for menor que 1 OU coluna maior que 8, o tabuleiro terminou
  // Logo, termina o loop
  if (currentPawnRow === 0 || currentPawnColumn === 9) {
    break;
  }

  // Se a posição current de linha E coluna estiverem na mesma posição que a peça oponente
  // Eu posso atacar
  if (currentPawnRow === opponentRowPosition && currentPawnColumn === opponentColumnPosition) {
    console.log('ataque bem sucedido na diagonal inferior direita');
    pawnCanAttack = true;
    break;
  }
}

// Identificar se a peça do oponente esta na diagonal superior direita
for (let index = 1; index < 8; index += 1) {
  let currentPawnRow = pawnRowPosition + index;
  let currentPawnColumn = pawnColumnPosition + index;

  // Se a posição da linha for maior que 8 OU coluna maior que 8, o tabuleiro terminou
  // Logo, termina o loop
  if (currentPawnRow === 9 || currentPawnColumn === 9) {
    break;
  }

  // Se a posição current de linha E coluna estiverem na mesma posição que a peça oponente
  // Eu posso atacar
  if (currentPawnRow === opponentRowPosition && currentPawnColumn === opponentColumnPosition) {
    console.log('ataque bem sucedido na diagonal superior direita');
    pawnCanAttack = true;
    break;
  }
}

if (pawnCanAttack === false) {
  console.log('Deu ruim, não pode atacar');
}