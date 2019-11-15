import Block from "./Block"

class Board {
  constructor() {
    // 넓이와 높이를 받아서 생성하도록 변경 해야 함
    const board = [
      [false, true, false, false],
      [false, false, false, false],
      [false, true, false, false],
      [true, true, true, true],
    ];

    this.board = new Array(board.length);
    for(let j = 0; j<board.length; j++) {
      this.board[j] = new Array(board[j].length);
      for(let i = 0; i<board[j].length; i++) {
        this.board[j][i] = new Block(i, j, board[j][i], this)
      }
    }

    for(let j = 0; j<board.length; j++) {
      for (let i = 0; i < board[j].length; i++) {
        const nearbyBlocks = this.range(j - 1, j + 1)
            .flatMap(y =>
                this.range(i - 1, i + 1)
                    .map(x => {
                      return {x, y}
                    })
            )
            .filter(position => position.x >= 0 && position.y >= 0)
            .filter(position => position.x < board[j].length && position.y < board.length)
            .filter(position => !(position.x == i && position.y == j))
            .map(position => this.board[position.y][position.x])

        this.board[j][i].setNearbyBlocks(nearbyBlocks);
      }
    }
  }

  gameover() {
    this.board.forEach(row =>
        row.forEach(block => block.isOpen = true)
    )
  }

  range(start, end) {
    return (new Array(end - start + 1)).fill(undefined).map((_, i) => i + start);
  }
}

export default Board;