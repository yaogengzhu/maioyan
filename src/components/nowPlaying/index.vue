<template>
  <div id="nowPlaying">
    <ul>
      <li class="box" v-for="item in movieList" :key="item.id">
        <div class="img">
          <img :src="item.img | imgFormat('128.180')" alt>
        </div>
        <div class="info">
          <h2>
            {{ item.nm }}
            <img src="../../assets/max.png" v-if="item.version" alt>
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
  </div>
</template>

<script>
export default {
  data(){
    return {
      movieList:[]
    }
  },
  // 页面加载获取数据 
  mounted(){
    this.axios.get('/api/movieOnInfoList?cityId=10').then( res =>{
      // console.log(res.status)
      // 作出判断数据是否获取成功 
      if (res.status) {
        this.movieList = res.data.data.movieList
      }
    })
  },
  // 私有过滤器
  filters:{
    imgFormat: (data,arg) => {
      return data.replace(/w\.h/,arg)
    }
  }
};
</script>

<style lang="scss" scoped>
#nowPlaying {
  flex: 1;
  padding: 0 10px;
  ul {
    margin-top: 50px;
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
