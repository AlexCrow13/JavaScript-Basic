const container = document.createElement("div");
container.className = 'container';
document.body.append(container);

function createChessBoard() {
    for (let n = 0; n < 100; n++) {
      const cell = document.createElement("div");
      cell.className = "cell";
      container.append(cell);
    }
  const board = document.querySelectorAll(".cell");

  let i = 0;
  const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    
  while (i < board.length) {
    if (i < 9) { 
      for (let j = 0; j < 9; j++) {
        board[i + 1].textContent = letters[j];
        i++;
      }
      i++;
      continue;
    } else if (i > 89) {
      i++;
      for ( let j = 0; j < 8; j++) {
        board[i].textContent = letters[j];
        i++;
      }
      i++;
      continue;
    } else {
      if ((i / 10) % 2 === 0) {
        i++;
        for (let j = 0; j < 8; j++) {
          if (i % 2 !== 0) {
            board[i].classList.toggle('black');
          } else {
            board[i].classList.toggle('white');
          }
          i++;
        }
      } else {
        i++;
        for (let j = 0; j < 8; j++) {
          if (i % 2 !== 0) {
            board[i].classList.toggle('white');
          } else {
            board[i].classList.toggle('black');
          }
          i++;
        }
      }
    }
    i++;
  }

  addNumbers(board)
  addChessman(board);
}

function addChessman(board) {
  const blackBackRow = [];
  const blackFrontRow = [];
  const whiteFrontRow = [];
  const whiteBackRow = [];

  for (let i = 0; i < board.length; i++) {
    if (i > 10 && i < 19) {
      blackBackRow.push(board[i]);
    } else if (i > 20 && i < 29) {
      blackFrontRow.push(board[i]);
    } else if (i > 70 && i < 79) {
      whiteFrontRow.push(board[i]);
    } else if (i > 80 && i < 89) {
      whiteBackRow.push(board[i]);
    }
  }

  for (let i = 0; i < blackFrontRow.length; i++) {
    blackFrontRow[i].classList.add('pawn', 'black_text');
    whiteFrontRow[i].classList.add('pawn', 'white_text');
  }
  for (let i = 0; i < blackBackRow.length; i++) {
    if (i === 0 || i === 7) {
      blackBackRow[i].classList.add('rook', 'black_text');
      whiteBackRow[i].classList.add('rook', 'white_text');
    } else if (i === 1 || i === 6) {
      blackBackRow[i].classList.add('knight', 'black_text');
      whiteBackRow[i].classList.add('knight', 'white_text');
    } else if (i === 2 || i === 5) {
      blackBackRow[i].classList.add('bishop', 'black_text');
      whiteBackRow[i].classList.add('bishop', 'white_text');
    } else if (i === 3) {
      blackBackRow[i].classList.add('queen', 'black_text');
      whiteBackRow[i].classList.add('queen', 'white_text');
    } else if (i === 4) {
      blackBackRow[i].classList.add('king', 'black_text');
      whiteBackRow[i].classList.add('king', 'white_text');
    }
  }
}

function addNumbers(board) {
  const numbers = ['1','2','3','4','5','6','7','8'];
  const numbersReversed = numbers.map.call(numbers, function(item){
    return item;
  }).reverse();

  const firstCol = [];
  for (let i=0; i < board.length; i+=10){
    firstCol.push(board[i]);
  }

  for (let i = 1; i <firstCol.length; i++){
    firstCol[i].textContent = numbersReversed[i-1];
  }

  const lastCol = [];
  for (let i=9; i < board.length; i+=10){
    lastCol.push(board[i]);
  }

  for (let i = 1; i <lastCol.length; i++){
    lastCol[i].textContent = numbersReversed[i-1];
  }
}


window.onload = createChessBoard;
