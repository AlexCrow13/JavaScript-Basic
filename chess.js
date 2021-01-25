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

  const numbers = ['1','2','3','4','5','6','7','8'];
  const firstCol = [];
  for (let i=0; i < board.length; i+=10){
    firstCol.push(board[i]);
  }

  console.log(firstCol);

  for (let i = 1; i <firstCol.length; i++){
    firstCol[i].textContent = numbers[i-1];

  }

  console.log(board);
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
}




window.onload = createChessBoard;
