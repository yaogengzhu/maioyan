<template>
  <div id="footer">
    <ul class="menu-list">
      <router-link tag="li" to="/movie">
        <img src="@/assets/movie.png" alt>
        <p>喵眼电影</p>
      </router-link>
      <router-link tag="li" to="/city">
          <img src="@/assets/message.png" alt>
          <p>喵眼城市</p>
      </router-link>
      <router-link tag="li" to="/person">
        <img src="@/assets/personal.png" alt>
        <p>个人中心</p>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#footer {
  height: 80px;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  border-top: 1px solid #ddd;
  // background-color: pink;
  ul {
    width: 100%;
  }
  ul li {
    float: left;
    width: 33.3333%;
    height: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  ul li img {
    display: block;
    width: 30px;
    height: 30px;
    // background-color: red;
  }
  ul li p {
    margin-top: 10px;
  }
  .router-link-active{
    color: red;
  }
}
</style>
