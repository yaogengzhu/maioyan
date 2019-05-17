<template>
  <div id="cityPage">
    <Header title="喵眼城市"/>
    <div class="content">
      <div class="nav">
        <ul>
          <router-link tag="li" to="/city/allCity">
            全城
            <span class="iconfont">&#xe65a;</span>
          </router-link>
          <router-link tag="li" to="/city/grand">
            品牌
            <span class="iconfont">&#xe65a;</span>
          </router-link>
          <router-link tag="li" to="/city/feature">
            特色
            <span class="iconfont">&#xe65a;</span>
          </router-link>
        </ul>
      </div>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>

    <!-- 挖坑 -->
    <!-- <keep-alive>
          <router-view></router-view>
    </keep-alive>-->
    <Footer/>
  </div>
</template>

<script>
import Header from "../../components/header";
import Footer from "@/components/footer";
export default {
  name: "city",
  components: {
    Header,
    Footer
  }
};
</script>

<style lang="scss" scoped>
#cityPage {
  .content {
    padding-top: 40px;
    padding-bottom: 60px;
    width: 100%;
    display: flex;
    flex-direction: column;
    .nav {
      width: 100%;
      height: 40px;
      border-bottom: 1px solid #d0d0d0;
      ul {
        width: 100%;
        position: fixed;
        top: 40px;
        left: 0;
        background-color: #fff;
        li {
          float: left;
          width: 33.3333%;
          text-align: center;
          line-height: 40px;
        }
        .router-link-active {
          border-bottom: 2px solid red;
        }
      }
    }
  }
}
</style>
