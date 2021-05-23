/* RAINHA */

// Posição da rainha
let queenRowPosition = 6;
let queenColumnPosition = 4;

/* Posição da peça oponente */
let opponentRowPosition = 5;
let opponentColumnPosition = 5;

// Pode atacar?
let queenCanAttack = false;

// Calculo para entender se o ataque foi bem sucedido ou não

// Se a rainha esta na mesma linha que a peça oponente OU a rainha esta na mesma coluna que a peça oponente, significa que o ataque é bem sucedido

if (queenRowPosition === opponentRowPosition || queenColumnPosition === opponentColumnPosition) {
  console.log('ataque bem sucedido na linha ou coluna');
  queenCanAttack = true;
}

// Identificar se a peça do oponente esta na diagonal inferior esquerda
for (let index = 1; index < 8; index += 1) {
  let currentQueenRow = queenRowPosition - index;
  let currentQueenColumn = queenColumnPosition - index;

  // Se a posição da linha ou da coluna forem igual a 0, o tabuleiro terminou.
  // Logo, termina o loop

  if (currentQueenRow === 0 || currentQueenColumn === 0) {
    break;
  }

  // Se a posição current de linha E coluna estiverem na mesma posição que a peça oponente
  // Eu posso atacar
  if (currentQueenRow === opponentRowPosition && currentQueenColumn === opponentColumnPosition) {
    console.log('ataque bem sucedido na diagonal inferior esquerda');
    queenCanAttack = true;
    break;
  }
}

// Identificar se a peça do oponente esta na diagonal superior esquerda
for (let index = 1; index < 8; index += 1) {
  let currentQueenRow = queenRowPosition + index;
  let currentQueenColumn = queenColumnPosition - index;

  // Se a posição da linha for maior que 8 OU coluna menor que 1, o tabuleiro terminou
  // Logo, termina o loop
  if (currentQueenRow > 8 || currentQueenColumn === 0) {
    break;
  }

  // Se a posição current de linha E coluna estiverem na mesma posição que a peça oponente
  // Eu posso atacar
  if (currentQueenRow === opponentRowPosition && currentQueenColumn === opponentColumnPosition) {
    console.log('ataque bem sucedido na diagonal superior esquerda');
    queenCanAttack = true;
    break;
  }
}

// Identificar se a peça do oponente esta na diagonal inferior direita
for (let index = 1; index < 8; index += 1) {
  let currentQueenRow = queenRowPosition - index;
  let currentQueenColumn = queenColumnPosition + index;

  // Se a posição da linha for menor que 1 OU coluna maior que 8, o tabuleiro terminou
  // Logo, termina o loop
  if (currentQueenRow === 0 || currentQueenColumn === 9) {
    break;
  }

  // Se a posição current de linha E coluna estiverem na mesma posição que a peça oponente
  // Eu posso atacar
  if (currentQueenRow === opponentRowPosition && currentQueenColumn === opponentColumnPosition) {
    console.log('ataque bem sucedido na diagonal inferior direita');
    queenCanAttack = true;
    break;
  }
}

// Identificar se a peça do oponente esta na diagonal superior direita
for (let index = 1; index < 8; index += 1) {
  let currentQueenRow = queenRowPosition + index;
  let currentQueenColumn = queenColumnPosition + index;

  // Se a posição da linha for maior que 8 OU coluna maior que 8, o tabuleiro terminou
  // Logo, termina o loop
  if (currentQueenRow === 9 || currentQueenColumn === 9) {
    break;
  }

  // Se a posição current de linha E coluna estiverem na mesma posição que a peça oponente
  // Eu posso atacar
  if (currentQueenRow === opponentRowPosition && currentQueenColumn === opponentColumnPosition) {
    console.log('ataque bem sucedido na diagonal superior direita');
    queenCanAttack = true;
    break;
  }
}

if (queenCanAttack === false) {
  console.log('Deu ruim, não pode atacar');
}