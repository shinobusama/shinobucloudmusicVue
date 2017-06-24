<template>
  <div id="app">
    <top></top>
    <div class="container">
      <menuleft></menuleft>
      <router-view class="router-view">
      </router-view>
    </div>
    <player></player>
  </div>
</template>

<script>
import top from "./components/header/top.vue"
import menuleft from "./components/menu/menu.vue"
import player from "./components/player/player.vue"
export default {
  name: 'app',
  components:{
    top,menuleft,player
  }
}
</script>

<style lang="scss" type="text/css" scoped>
  #app{
    position: absolute;
    width: 1022px;
    height: 670px;
    left: 100px;
    box-shadow: 0 2px 10px #818181;
    .container{
      display: flex;
      width: 1022px;
      height: 620px;
      .router-view{
        flex:1;
      }
    }
  }
</style>
