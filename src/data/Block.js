class Block {
  constructor(x, y, isMine, board) {
    this.x = x;
    this.y = y;
    this.isMine = isMine;
    this.board = board;
    this.nearbyBlocks = [];
    this.nearbyMineCount = 0;
    this.isOpen = false;
  }

  setNearbyBlocks(nearbyBlocks) {
    this.nearbyBlocks = nearbyBlocks;
    this.nearbyMineCount = this.nearbyBlocks.filter(it => it.isMine === true).length;
  }

  open() {
    this.isOpen = true;

    if (this.isMine === true) {
      this.board.gameover();
    }
    else if (this.nearbyMineCount === 0) {
      this.nearbyBlocks.forEach(it => it.open())
    }
  }

  blockContent() {
    if (this.isOpen === false) return "";

    if (this.isMine === true) {
      return "<span class='mine'><img src='mine.ico' /></span>";
    }

    if (this.nearbyMineCount === 0) {
      return "";
    }
    else if (this.nearbyMineCount === 1) {
      return `<span class="mine_one">${this.nearbyMineCount}</span>`;
    } else if(this.nearbyMineCount === 2) {
      return `<span class="mine_two">${this.nearbyMineCount}</span>`;
    } else if(this.nearbyMineCount === 3) {
      return `<span class="mine_three">${this.nearbyMineCount}</span>`;
    } else if(this.nearbyMineCount === 4) {
      return `<span class="mine_four">${this.nearbyMineCount}</span>`;
    } else if(this.nearbyMineCount === 5) {
      return `<span class="mine_five">${this.nearbyMineCount}</span>`;
    }

    return `<span class="mine_many">${this.nearbyMineCount}</span>`;
  }

  blockStyle() {
    return {
      block: true,
      'open': this.isOpen
    }
  }
}

export default Block;