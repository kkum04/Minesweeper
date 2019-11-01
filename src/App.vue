<template>
  <div id="app">

    <b-container class="bv-example-row">
    <b-row v-for="(temp, j) in board.board.length" :key="j">
      <block v-for="(block, idx) in board.board[j]"
             :key="j + ',' + idx"
             :block="block"></block>
    </b-row>
    </b-container>
  </div>
</template>

<script>
  import Board from "./data/Board"
  import Block from "./components/Block";

  export default {
    name: 'app',
    components: {Block},
    data() {
      return {
        board: new Board()
      }
    }
  }
</script>

<style lang="scss">
  @import '~bootstrap/dist/css/bootstrap.css';
  @import '~bootstrap-vue/dist/bootstrap-vue.css';

</style>