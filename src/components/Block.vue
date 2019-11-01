<template>
  <b-button v-html="blockContent" variant="outline-success"
            class="block"></b-button>
</template>

<script>
  export default {
    name: "Block",
    props: {
      block: Object
    },
    computed: {
      blockContent() {
        if (this.block.isMine === true) {
          return "<span class='mine'>O</span>";
        }

        if (this.block.nearbyMineCount === 0) {
          return "";
        }
        else if (this.block.nearbyMineCount === 1) {
          return `<span class="mine_one">${this.block.nearbyMineCount}</span>`;
        } else if(this.block.nearbyMineCount === 2) {
          return `<span class="mine_two">${this.block.nearbyMineCount}</span>`;
        } else if(this.block.nearbyMineCount === 3) {
          return `<span class="mine_three">${this.block.nearbyMineCount}</span>`;
        } else if(this.block.nearbyMineCount === 4) {
          return `<span class="mine_four">${this.block.nearbyMineCount}</span>`;
        } else if(this.block.nearbyMineCount === 5) {
          return `<span class="mine_five">${this.block.nearbyMineCount}</span>`;
        }


        return `<span class="mine_many">${this.block.nearbyMineCount}</span>`;;
      }
    }
  }
</script>

<style>
  .btn.block {
    width: 40px;
    height: 40px;
    border-radius: 0px;
    border: 0px;
  }

  .mine {
    color: red;
  }

  .mine_one {
    color: #1c77d1;
  }

  .mine_two {
    color: #3a8e3d;
  }

  .mine_three {
    color: #d33634;
  }

  .mine_four {
    color: #8027a2;
  }

  .mine_many {
    color: #000000;
  }

  .row:nth-child(odd) .block:nth-child(odd) {
    background-color: #e5c29f;
  }

  .row:nth-child(even) .block:nth-child(odd) {
    background-color: #d7b899;
  }

  .row:nth-child(odd) .block:nth-child(even) {
    background-color: #d7b899;
  }

  .row:nth-child(even) .block:nth-child(even) {
    background-color: #e5c29f;
  }

  /*.block:nth-child(even) {*/
  /*  background-color: #d7b899;*/
  /*}*/

</style>