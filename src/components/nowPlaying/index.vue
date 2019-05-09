<template>
  <div id="nowPlaying">
    <div class="box">
      <div class="img">
        <img src="@/assets/movie.jpg" alt>
      </div>
      <div class="info">
        <h2>
          复仇者联盟：终极之战
          <img src="../../assets/max.png" alt>
        </h2>
        <p>
          观众影评：
          <span>9.0</span>
        </p>
        <p>主演：</p>
        <p>今日放映</p>
      </div>
      <div class="buy">
        <button>购买</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#nowPlaying {
  .box {
    width: 100%;
    overflow: hidden;
    padding: 0 10px;
    margin-top: 10px;
  }
  div {
    float: left;
    height: 100px;
  }
  .img {
    width: 64px;
    height: 90px;
    img {
      width: 100%;
    }
  }
  .info {
    position: relative;
    padding: 0 0 0 10px;
    h2 {
      margin: 4px 0 15px 0;
      width: 150px;
      font-weight: 500;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      img {
        position: absolute;
        width: 50px;
        top: 0;
        right: 10px;
      }
    }
    p {
      margin: 7px 0;
      font-size: 12px;
      width: 200px;
    }
    p span {
      color: rgb(96, 243, 128);
    }
  }
  .buy {
    width: 80px;
    float: right;
    display: flex;
    flex-direction: column;
    align-self: center;
    justify-content: center;
    button {
      display: inline-block;
      width: 50px;
      height: 30px;
      background-color: red;
      color: #fff;
      border: none;
      border-radius: 4px;
    }
  }
}
</style>
