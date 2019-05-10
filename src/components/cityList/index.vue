<template>
  <div class="city_body">
    <div class="city_list">
      <div class="city_hot">
        <h2>热门城市</h2>
        <ul class="clearfix">
          <li>上海</li>
          <li>北京</li>
          <li>上海</li>
          <li>北京</li>
          <li>上海</li>
          <li>北京</li>
          <li>上海</li>
          <li>北京</li>
        </ul>
      </div>
      <div class="city_sort">
        <div>
          <h2>A</h2>
          <ul>
            <li>阿拉善盟</li>
            <li>鞍山</li>
            <li>安庆</li>
            <li>安阳</li>
          </ul>
        </div>
        <div>
          <h2>B</h2>
          <ul>
            <li>北京</li>
            <li>保定</li>
            <li>蚌埠</li>
            <li>包头</li>
          </ul>
        </div>
        <div>
          <h2>A</h2>
          <ul>
            <li>阿拉善盟</li>
            <li>鞍山</li>
            <li>安庆</li>
            <li>安阳</li>
          </ul>
        </div>
        <div>
          <h2>B</h2>
          <ul>
            <li>北京</li>
            <li>保定</li>
            <li>蚌埠</li>
            <li>包头</li>
          </ul>
        </div>
        <div>
          <h2>A</h2>
          <ul>
            <li>阿拉善盟</li>
            <li>鞍山</li>
            <li>安庆</li>
            <li>安阳</li>
          </ul>
        </div>
        <div>
          <h2>B</h2>
          <ul>
            <li>北京</li>
            <li>保定</li>
            <li>蚌埠</li>
            <li>包头</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="city_index">
      <ul>
        <li>A</li>
        <li>B</li>
        <li>C</li>
        <li>D</li>
        <li>E</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      cityData: []
    };
  },
  mounted() {
    // 获取数据
    this.axios.get("/api/cityList").then(res => {
      // console.log(res.data.data);
      var data = res.data.data.cities;
      // 调用格式化
      var dataList = this.formatCityList(data);
      dataList.sort(function(a, b){
        if (a.index >b.index){
          return 1
        } else if (a.index < b.index){
          return -1
        } else{
          return 0
        }
      })
      console.log(dataList)
      // this.cityData = res.data.data
    });
  },
  methods: {
    //需要格式化数据
    formatCityList(cities) {
      // console.log(cities)
      var cityList = [];
      // var hostList = [];
      // 循环遍历传递过来的数据
      for (var i = 0; i < cities.length; i++) {
        // 取出数组中每个单词的字母
        var firstLetter = cities[i].py.substring(0, 1);
        if (toCom()) {
          cityList.push({
            index: firstLetter,
            list: [{ nm: cities[i].nm, id: cities[i].id }]
          });
        } else {
          // 累加到已有索引
          for (var j = 0; j < cityList.length; j++) {
            if (cityList[j].index === firstLetter) {
              cityList[j].list.push({ nm: cities[i].nm, id: cities[i].id });
            }
          }
        }
      }
      //在写一个判断的函数
      function toCom() {
        for (var i = 0; i < cityList.length; i++) {
          if (cityList[i].index === firstLetter) {
            return false;
          }
        }
        return true;
      }
      // console.log(cityList)
      return cityList
    }
  }
};
</script>

<style lang="scss" scoped>
.clearfix {
  overflow: hidden;
}
.city_body {
  margin-top: 80px;
  margin-bottom: 60px;
  display: flex;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
}
.city_body .city_list {
  flex: 1;
  overflow: auto;
  background: #fff5f0;
}
.city_body .city_list::-webkit-scrollbar {
  background-color: transparent;
  width: 0;
}
.city_body .city_hot {
  margin-top: 20px;
}
.city_body .city_hot h2 {
  padding-left: 15px;
  line-height: 30px;
  font-size: 14px;
  background: #f0f0f0;
  font-weight: normal;
}

.city_body .city_hot ul li {
  float: left;
  background: #fff;
  width: 29%;
  height: 33px;
  margin-top: 15px;
  margin-left: 3%;
  padding: 0 4px;
  border: 1px solid #e6e6e6;
  border-radius: 3px;
  line-height: 33px;
  text-align: center;
  box-sizing: border-box;
}
.city_body .city_sort {
}
.city_body .city_sort div {
  margin-top: 20px;
}
.city_body .city_sort h2 {
  padding-left: 15px;
  line-height: 30px;
  font-size: 14px;
  background: #f0f0f0;
  font-weight: normal;
}
.city_body .city_sort ul {
  padding-left: 10px;
  margin-top: 10px;
}
.city_body .city_sort ul li {
  line-height: 30px;
  line-height: 30px;
}
.city_body .city_index {
  width: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  border-left: 1px #e6e6e6 solid;
}
</style>
