<template>
  <div class="info">
    <loading v-if="isLoading"></loading>
    <ul v-else>
      <li v-for="item in allCity" :key="item.id">
        <h2>
          {{ item.nm }}
          <span class="price">23元起</span>
        </h2>
        <div class="address">
          <p>
            <span class="name">{{ item.addr }}</span>
            <span class="distance">{{ item.distance }}</span>
          </p>
        </div>
        <div class="card">
          <!-- 处理标签  简便的处理，会导致vue有小小的警告-->
          <span
            v-for="( list,key) in item.tag"
            v-if="list==1"
            :class="key | colorFormat(key)"
            :key="key"
          >{{ key | tagFormat(key) }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      allCity: [], // 存放城市数据
      isLoading: true,
      cityId: -1 // 优化ID
    };
  },
  activated() {
    // console.log('ok')
    let cityId = this.$store.state.city.id;
    if (this.cityId === cityId) return;
    this.isLoading = true;
    this.axios.get("/api/cinemaList?cityId=" + cityId).then(res => {
      // console.log(res)
      // 判断数据是否请求成功
      if (res.status === 200) {
        // 将数据赋值到存放的数据数组中
        this.allCity = res.data.data.cinemas;
        this.cityId = cityId;
        this.isLoading = false;
      }
    });
  },
  
  // 过滤器处理tag
  filters: {
    tagFormat(key) {
      switch (key) {
        case "allowRefund":
          return "改签";
        // break;
        case "snack":
          return "小吃";
        // break;
        case "endorse":
          return "退";
        // break;
        case "sell":
          return "折扣卡";
        // break;
      }
    },
    colorFormat(key) {
      switch (key) {
        case "allowRefund":
          return "green";
        // break;
        case "snack":
          return "ol";
        // break;
        case "endorse":
          return "green";
        // break;
        case "sell":
          return "ol";
        // break;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.info {
  padding: 0 15px;
  width: 100%;
  flex: 1;
  box-sizing: border-box;
  ul {
    li {
      width: 100%;
      //   margin: 30px 0;
      padding: 25px 0;
      border-bottom: 1px solid #d0d0d0;
      h2 {
        font-size: 16px;
        font-weight: 500;
        margin: 10px 0;
        .price {
          font-size: 14px;
          color: orange;
        }
      }
      .address {
        // margin: 10px 0;
        padding-top: 10px;
        p {
          font-size: 14px;
          color: #444;
          .name {
            display: inline-block;
            width: 250px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .distance {
            float: right;
          }
        }
      }
      .card {
        padding-top: 20px;
        span {
          display: inline-block;
          box-sizing: border-box;
          padding: 5px;
          border: 1px solid green;
          font-size: 12px;
          margin-right: 10px;
        }
        .ol {
          // color: gold;
          border: 1px solid gold;
        }
        .green {
          border: 1px solid green;
        }
      }
    }
  }
}
</style>
