<template>
  <div class="box">
    <!-- <div></div> -->
    <h2>{{ title }}</h2>
    <p>{{ content }}</p>
    <div class="info">
      <div class="cancel" @touchstart="handleCancel">{{ cancel }}</div>
      <div @touchstart="handleOk">{{ ok }}</div>
    </div>
  </div>
</template>

<script>
export default {
    name:"messageBox"
};
</script>

<style lang="scss" scoped>
.box {
  position: absolute;
  left: 50%;
  top: 50%;
  margin: -60px 0 0 -100px;
  width: 200px;
  height: 120px;
  border: 1px solid #ccc;
  background-color: #fff;
  box-shadow: 2px 3px 10px 2px #ccc;
  z-index: 222;
  h2 {
    text-align: center;
    line-height: 30px;
  }
  p {
    text-align: center;
    line-height: 40px;
  }
  .info {
    display: flex;
    position: absolute;
    border-top: 1px solid #ccc;
    bottom: 0;
    width: 100%;
    div {
      flex: 1;
      height: 40px;
      text-align: center;
      line-height: 40px;
    }
    .cancel {
      border-right: 1px solid #ccc;
    }
  }
}
</style>
