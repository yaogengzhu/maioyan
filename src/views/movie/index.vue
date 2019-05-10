<template>
  <div id="movie">
    <Header title="喵眼电影"/>
    <!-- 导航部分 -->
    <div class="content">
      <ul class="nav-list">
        <router-link tag="li" to="/movie/cityList">
          宜昌
          <span class="iconfont">&#xe65a;</span>
        </router-link>
        <router-link tag="li" to="/movie/NowPlaying">正在热映</router-link>
        <router-link tag="li" to="/movie/willPlaying">即将上映</router-link>
        <router-link tag="li" to="/movie/search">
          <span class="iconfont search">&#xe751;</span>
        </router-link>
      </ul>
      <!-- 挖一个坑来写子路由部分 -->
      <router-view></router-view>
    </div>
    <Footer/>
  </div>
</template>

<script>
// 导入组件
import Header from "@/components/header";
import Footer from "@/components/footer";
export default {
  name: "movie",
  components: {
    Header,
    Footer
  }
};
</script>

<style lang="scss" scoped>
#movie {
  // position: relative;
  margin-top: 40px;
  margin-bottom: 60px;
  height: 100%;
  .content {
    display: flex;
    .nav-list {
      overflow: hidden;
      position: fixed;
      top: 40px;
      left: 0;
      height: 40px;
      z-index: 999;
      background-color: #fff;
      width: 100%;
      overflow: hidden;
    }
    li {
      float: left;
      width: 25%;
      height: 40px;
      line-height: 40px;
      font-size: 15px;
      color: #444;
      font-weight: 500;
      text-align: center;
      padding: 0 10px;
      box-sizing: border-box;
      .search {
        font-size: 30px;
        color: red;
      }
    }
    .router-link-active {
      color: red;
      border-bottom: 2px solid red;
    }
  }
}
</style>
