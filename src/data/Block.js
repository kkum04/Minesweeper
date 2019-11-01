class Block {
  constructor(x, y, isMine, nearbyBlocks, nearbyMineCount) {
    this.x = x;
    this.y = y;
    this.isMine = isMine;
    this.nearbyBlocks = nearbyBlocks;
    this.nearbyMineCount = nearbyMineCount
    this.isOpen = false;
  }
}

export default Block;