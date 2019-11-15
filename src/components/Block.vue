<template>
  <b-button v-html="blockContent"
            @click="onClick"
            :class="blockStyle"></b-button>
</template>

<script>
  export default {
    name: "Block",
    props: {
      block: Object
    },
    methods: {
      onClick() {
        this.block.open();
      }
    },
    computed: {
      blockContent() {
        return this.block.blockContent();
      },
      blockStyle() {
        return this.block.blockStyle();
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
    padding: 4px;
  }

  .mine img {
    width: 100%;
    height: 100%;
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
    background-color: #a2d149;
  }

  .row:nth-child(even) .block:nth-child(odd) {
    background-color: #aad751;
  }

  .row:nth-child(odd) .block:nth-child(even) {
    background-color: #aad751;
  }

  .row:nth-child(even) .block:nth-child(even) {
    background-color: #a2d149;
  }


  .row:nth-child(odd) .block.open:nth-child(odd) {
    background-color: #e5c29f;
  }

  .row:nth-child(even) .block.open:nth-child(odd) {
    background-color: #d7b899;
  }

  .row:nth-child(odd) .block.open:nth-child(even) {
    background-color: #d7b899;
  }

  .row:nth-child(even) .block.open:nth-child(even) {
    background-color: #e5c29f;
  }


</style>