<template>
  <div id="search">
    <div class="search-box">
      <div class="search-content">
        <input type="text" autofocus placeholder="请输入关键字">
        <span class="iconfont">&#xe751;</span>
      </div>
    </div>
    <div class="result">
      <p>动作片/科幻片/武侠片</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#search {
  flex: 1;
  width: 100%;
  margin-top: 40px;
  .search-box {
    width: 100%;
    height: 50px;
    background-color: #f9f9f9;
    display: flex;
    justify-content: center;
    align-items: center;
    .search-content {
      position: relative;
      width: 90%;
      input {
        width: 100%;
        height: 30px;
        padding: 0 10px 0 30px;
        box-sizing: border-box;
        outline: none;
      }
      span {
        position: absolute;
        top: 8px;
        left: 6px;
      }
    }
  }
  .result {
    padding: 0 15px;
    height: 30px;
    line-height: 30px;
    color: #555;
    border-bottom: 1px solid #ddd;
  }
}
</style>
