<template>
  <div id="willPlaying">
    <loading v-if="isLoading"></loading>
    <scroller v-else>
      <ul>
        <li class="box" v-for="item in comingList" :key="item.id">
          <div class="img">
            <img :src="item.img | imgFormat('128.180')" alt>
          </div>
          <div class="info">
            <h2>
              {{ item.nm }}
              <!-- <img src="../../assets/max.png" alt> -->
            </h2>
            <p>
              影评：
              <span>{{ item.sc!==0?item.sc:'暂未上映' }}</span>
            </p>
            <p>主演: {{ item.star }}</p>
            <p>{{ item.showInfo!==''?item.showInfo:'暂无消息' }}</p>
          </div>
          <div class="buy">
            <button>预售</button>
          </div>
        </li>
      </ul>
    </scroller>
  </div>
</template>

<script>
export default {
  name: "willPlaing",
  data() {
    return {
      comingList: [],
      isLoading: true,
      cityId: -1 // 优化数据请求
    };
  },
  activated() {
    // console.log('ok')
    let cityId = this.$store.state.city.id;
    // 判断ID是否和当前的id一致
    if (this.cityId === cityId) return;
    this.isLoading = true;
    // 获取数据
    this.axios.get("/api/movieComingList?cityId=" + cityId).then(res => {
      if (res.status === 200) {
        this.comingList = res.data.data.comingList;
        // 将loading取消
        this.isLoading = false;
        // 将当前id 复制给 优化id
        this.cityId = cityId;
      }
    });
  }
};
</script>

<style lang="scss" scoped>
#willPlaying {
  flex: 1;
  height: 100%;
  padding: 0 10px;
  ul {
    padding-top: 80px;
    padding-bottom: 60px;
    overflow: auto;
  }
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
</style>
