<template>
  <div id="movie">
    <Header title="喵眼电影"/>
    <!-- 导航部分 -->
    <div class="content">
      <ul class="nav-list">
        <router-link tag="li" to="/movie/cityList">
          {{ $store.state.city.nm}}
          <span class="iconfont">&#xe65a;</span>
        </router-link>
        <router-link tag="li" to="/movie/nowPlaying">正在热映</router-link>
        <router-link tag="li" to="/movie/willPlaying">即将上映</router-link>
        <router-link tag="li" to="/movie/search">
          <span class="iconfont search">&#xe751;</span>
        </router-link>
      </ul>
      <!-- 挖一个坑来写子路由部分 -->
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <router-view name="detail"/>
    <Footer/>
  </div>
</template>

<script>
// 导入组件
import Header from "@/components/header";
import Footer from "@/components/footer";
import { messageBox } from "@/components/js";
export default {
  name: "movie",
  components: {
    Header,
    Footer
  },
  mounted() {
    // 调用城市定位的location
    this.axios.get("/api/getLocation").then(res => {
      // console.log(res)
      // 判断是否调用成功
      if (res.status === 200) {
        // console.log(res.data.data.nm);
        // 做出一个判断，当前城市与选择城市一致的时候。不用弹窗
        if (this.$store.state.city.id == res.data.data.id) return;
        // 调用messageBox()函数
        // 为了提高体验度，加一个定时器
        setTimeout(() => {
          messageBox({
            title: "定位",
            content: res.data.data.nm,
            cancel: "取消",
            ok: "切换定位",
            // 取消事件暂时不用处理
            // handleCancel() {
            //   console.log(1);
            // },
            handleOk() {
              // console.log(2);
              // 将获取到的数据本地存储
              window.localStorage.setItem("city_nm", res.data.data.nm);
              window.localStorage.setItem("city_id", res.data.data.id);
              // 刷新本页
              window.location.reload();
            }
          });
        }, 1000);
      }
    });
  }
};
</script>
<style lang="scss" scoped>
#movie {
  // position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  .content {
    display: flex;
    flex: 1;
    height: 100%;
    position: relative;
    z-index: 1;
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
