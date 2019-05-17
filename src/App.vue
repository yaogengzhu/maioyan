<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>


<script>
export default {

}
</script>

<style>
html,body{
  height: 100%;

}
  #app{
    height: 100%;
    display: flex;
    flex-direction: column;
  }
</style>
