<template>
  <div id="searchPage">
    <div class="search-box">
      <div class="search-content">
        <input type="text" autofocus placeholder="请输入关键字" v-model="query">
        <span class="iconfont">&#xe751;</span>
      </div>
    </div>
    <div class="result">
      <p>动作片/科幻片/武侠片</p>
    </div>
    <loading v-if="isLoading"></loading>
    <div class="search-result">
      <ul>
        <li v-for="item in movieList" :key="item.id">
          <div class="img">
            <img :src="item.img | imgFormat('128.180')" alt>
          </div>
          <div class="info">
            <h2>{{item.nm}}</h2>
            <p>{{ item.enm }}</p>
            <p>评分：{{ item.sc }}</p>
            <p>主演：{{ item.star }}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "searchPage",
  data() {
    return {
      query: "",
      movieList: [], // 存放电影列表数据
      cancelTokenFn: null,
      isLoading:false
    };
  },
  // 使用watch发起监听异步请求
  watch: {
    query: function(newVal) {
      // console.log(newVal);
      // 发送axios请求
      // 设置函数抖动
      this.isLoading = true;
      const _this = this;
      const CancelToken = this.axios.CancelToken;

      this.cancelTokenFn && this.cancelTokenFn();
      this.cancelTokenFn = null;
      this.axios
        .get("/api/searchList?cityId=10&kw=" + newVal, {
          cancelToken: new CancelToken(function executor(c) {
            _this.cancelTokenFn = c;
          })
        })
        .then(res => {
          // console.log(res)
          // console.log(res.data.data.movies);
          if (newVal && res.status === 200 && res.data.data.movies.list) {
            this.movieList = res.data.data.movies.list;
            // 数据处理成功之后，将loading 取消
            this.isLoading = false;
          }
        })
        .catch(() => {
          // ❌信息提示
          // console.log(err);
        });
      if (newVal === "") {
        this.movieList.length = 0;
        //  清除输入框，也将isLoading变成false
        this.isLoading =false;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
#searchPage {
  flex: 1;
  width: 100%;
  // margin-top: 40px;
  padding-top: 80px;
  padding-bottom: 60px;
  .search-box {
    width: 100%;
    height: 50px;
    background-color: #f9f9f9;
    display: flex;
    justify-content: center;
    align-items: center;
    .search-content {
      position: relative;
      width: 90%;
      input {
        width: 100%;
        height: 30px;
        padding: 0 10px 0 30px;
        box-sizing: border-box;
        outline: none;
      }
      span {
        position: absolute;
        top: 8px;
        left: 6px;
      }
    }
  }
  .result {
    padding: 0 15px;
    height: 30px;
    line-height: 30px;
    color: #555;
    border-bottom: 1px solid #ddd;
  }
  .search-result {
    padding: 10px;
    width: 100%;
    ul li {
      display: flex;
      flex-direction: row;
      margin-top: 10px;
      .img {
        width: 64px;
        height: 90px;
        img {
          display: block;
          width: 100%;
          background-color: red;
        }
      }
      .info {
        flex: 1;
        padding-left: 15px;
        h2 {
          font-weight: 500;
        }
        p {
          font-size: 12px;
          margin: 10px;
        }
      }
    }
  }
}
</style>
