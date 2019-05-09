<template>
  <div id="movie">
    <Header title="喵眼电影"/>
    <!-- 导航部分 -->
    <div class="nav">
      <ul class="nav-list">
        <router-link tag="li" to="/movie/cityList" >
          宜昌
          <span class="iconfont">&#xe65a;</span>
        </router-link>
        <router-link tag="li" to="/movie/NowPlaying">正在热映</router-link>
        <router-link tag="li" to="/movie/willPlaying">即将上映</router-link>
        <router-link tag="li" to="/movie/search">
        <span class="iconfont search">&#xe751;</span>
        </router-link>
      </ul>
    </div>
    <!-- 挖一个坑来写子路由部分 -->
    <router-view></router-view>
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
  .nav {
    .nav-list {
      width: 100%;
    }
    li {
      float: left;
      width: 25%;
      height: 40px;
      line-height: 40px;
      font-size: 16px;
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
