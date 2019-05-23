<template>
  <div id="detail">
    <Header title="电影详情">
      <i class="back" @touchstart="handleTOBack"></i>
    </Header>
    <div class="content">
      <div class="content-detail">
        <div
          class="content-bg"
          style="background:url(http://p0.meituan.net/148.208/movie/f29c0f9ff0340d00085f4bc1a395ecf02603950.jpg)"
        ></div>
        <div class="content-filter"></div>
        <div class="content-info">
          <div class="detail-list-img">
            <img
              src="http://p0.meituan.net/148.208/movie/f29c0f9ff0340d00085f4bc1a395ecf02603950.jpg"
            >
          </div>
          <div class="detail-list-info">
            <h2>大侦探皮卡丘</h2>
            <p>POKÉMON Detective Pikachu</p>
            <p>8.5</p>
            <p>{{ movieList.cat }}</p>
            <p>{{ movieList.fra }} / {{ movieList.dur }}分钟</p>
            <p>2019-05-10大陆上映</p>
          </div>
        </div>
      </div>
      <div class="introduce">
        <p>{{ movieList.dra }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/header";
export default {
  name: "detail",
  data(){
    return {
      movieList: {}
    }
  },
  props: ["movieId"],
  components: {
    Header
  },
  mounted() {
    // 这种方式也可以传递id过来，在组件中使用 $route 会使之与其对应路由形成高度耦合，从而使组件只能在某些特定的 URL 上使用，限制了其灵活性。
    // console.log(this.$route.params.movieId)
    // console.log(this.movieId)
    // 接受到id ,可以将详情页数据获取
    this.axios
      .get("/api/detailmovie?movieId=" + this.$route.params.movieId)
      .then(res => {
        // console.log(res.data.data.detailMovie);
        if (res.status === 200) {
          this.movieList = res.data.data.detailMovie;
        }
      });
  },
  methods: {
    handleTOBack() {
      //   console.log('ok')
      // window.location.href(-1)
      // 返回上一级的api
      this.$router.back();
    }
  }
};
</script>

<style lang="scss" scoped>
#detail {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100%;
  z-index: 100;
  background-color: #fff;

  .back {
    border-left: 10px solid transparent;
    height: 0px;
    border-right: 10px solid #fff;
    border-bottom: 8px solid transparent;
    border-top: 8px solid transparent;
    position: absolute;
    top: 10px;
    left: 5px;
  }
  .content {
    flex: 1;
    overflow: auto;
    margin-bottom: 50px;
    position: relative;
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    // 影片介绍
    .content-detail {
      position: relative;
      width: 100%;
      height: 200px;
      overflow: hidden;
      .content-bg {
        width: 100%;
        height: 200px;
        background: 0 40%;
        -webkit-filter: blur(20px);
        filter: blur(20px);
        background-size: cover;
        position: absolute;
        left: 0;
        top: 0;
      }
      .content-filter {
        width: 100%;
        height: 100%;
        background-color: #40454d;
        opacity: 0.55;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 1;
      }
      .content-info {
        display: flex;
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 2;
        .detail-list-img {
          width: 108px;
          height: 150px;
          border: 1px solid #f0f2f3;
          margin: 20px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .detail-list-info {
          margin-top: 20px;
          h2 {
            font-size: 20px;
            color: #fff;
            font-weight: 400;
            line-height: 40px;
          }
          p {
            color: #fff;
            line-height: 20px;
            font-size: 14px;
            color: #ccc;
          }
        }
      }
    }
  }
  .introduce {
    margin: 10px;
    p {
      font-size: 18px;
      //   margin-top:5px;
      line-height: 20px;
    }
  }
}
</style>
