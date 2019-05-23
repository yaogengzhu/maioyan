<template>
  <div id="nowPlaying" ref="wrapper">
    <!-- 处理子组件传递过来的数据 -->
    <loading v-if="isLoading"></loading>
    <scroller :changeScroll="changeScroll" :changeTouchEnd="changeTouch" v-else>
      <ul>
        <li v-if="flag" style="text-align:center">{{ msg }}</li>
        <li class="box" v-for="item in movieList" :key="item.id">
          <div class="img" @tap="handleToDetil(item.id)">
            <img :src="item.img | imgFormat('128.180')" alt>
          </div>
          <div class="info" @tap="handleToDetil(item.id)">
            <h2>
              {{ item.nm }}
              <img src="@/assets/max.png" v-if="item.version" alt>
            </h2>
            <p>
              影评：
              <span>{{ item.sc !==0?item.sc:'暂无评分' }}</span>
            </p>
            <p>主演: {{ item.star }}</p>
            <p>{{ item.showInfo }}</p>
          </div>
          <div class="buy">
            <button>购买</button>
          </div>
        </li>
      </ul>
    </scroller>
  </div>
</template>

<script>
// 引入better-scroll   (⚠️使用全局组册scroll组件 )
// import BScroll from "better-scroll";
export default {
  name: "nowPlaying",
  data() {
    return {
      movieList: [],
      flag: false,
      msg: "正在刷新",
      isLoading: true, // 加载动画默认值为true
      cityId: -1 // 为了解决性能优化
    };
  },
  methods: {
    // 点击触发进入详情页
    handleToDetil(id) {
      // console.log(id);
      // 将id传入下一个组件中
      this.$router.push("/movie/detail/" + id);
    },
    changeScroll() {
      // console.log();
      this.msg = "正在更新";
      this.flag = true;
      setTimeout(() => {
        this.flag = true;
      }, 1000);
    },
    changeTouch() {
      this.msg = "更新完成";
      setTimeout(() => {
        this.flag = false;
      }, 1000);
    }
  },
  // 页面加载获取数据
  // 由于使用了 keep-alive
  activated() {
    // console.log("ok");
    // 获取城市id
    let cityId = this.$store.state.city.id;
    // 需求就是没有更改城市的时候，不会重新发起请求
    if (this.cityId === cityId) return;
    this.isLoading = true;
    this.axios.get("/api/movieOnInfoList?cityId=" + cityId).then(res => {
      // console.log(res.status)
      // 作出判断数据是否获取成功
      if (res.status === 200) {
        this.movieList = res.data.data.movieList;
        this.isLoading = false;
        this.cityId = cityId;
      }
    });
    // this.$nextTick(() => {
    //   var scroll = new BScroll(this.$refs.wrapper, {
    //     tap: true,
    //     probeType: 1
    //   });
    //   //  上拉刷新
    //   scroll.on("scroll", () => {
    //     this.msg = "正在更新";
    //     this.flag = true;
    //     // setTimeout(() => {
    //     //   this.flag = true;
    //     // }, 1000);
    //   });
    //   scroll.on("scrollEnd", () => {
    //     // console.log("end");
    //     this.msg = "更新完成";
    //     // this.flag = false;
    //     setTimeout(() => {
    //       this.flag = false;
    //     }, 1000);
    //   });
    // });
  },
  // 私有过滤器
  filters: {
    imgFormat: (data, arg) => {
      return data.replace(/w\.h/, arg);
    }
  }
};
</script>

<style lang="scss" scoped>
#nowPlaying {
  flex: 1;
  padding: 0 10px;
  // height: 300px;
  margin-top: 80px;
  margin-bottom: 60px;
  ul {
    overflow: auto;
    .box {
      display: flex;
      // height: 1px;
      align-self: center;
      margin: 15px 0;
    }
    .img {
      width: 64px;
      height: 90px;
      img {
        width: 100%;
        height: auto;
      }
    }
    .info {
      flex: 1;
      margin-left: 10px;
      position: relative;
      h2 {
        width: 150px;
        margin-bottom: 15px;
        font-weight: 500;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        img {
          position: absolute;
          top: 0;
          right: 10px;
          width: 50px;
        }
      }
      p {
        width: 200px;
        margin: 10px 0;
        font-size: 12px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        span {
          color: coral;
        }
      }
    }
    .buy {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      button {
        border: 0;
        width: 47px;
        height: 28px;
        color: #fff;
        border-radius: 4px;
        background-color: red;
      }
    }
  }
}
</style>
