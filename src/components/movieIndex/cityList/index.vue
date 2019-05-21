<template>
  <div class="city_body">
    <div class="city_list">
      <loading v-if="isLoading"></loading>
      <scroller ref="jump" v-else>
        <!-- 由于下面有两个部分，所以补一个div -->
        <div>
          <div class="city_hot">
            <h2>热门城市</h2>
            <ul class="clearfix">
              <!-- tap点击事件处理城市信息 -->
              <li
                v-for="item in hostCity"
                :key="item.id"
                @tap="changCity(item.nm,item.id)"
              >{{ item.nm }}</li>
            </ul>
          </div>
          <div class="city_sort" ref="city_sort">
            <div v-for="item in cityData" :key="item.id">
              <h2>{{ item.index }}</h2>
              <ul>
                <li
                  v-for=" list  in item.list"
                  :key="list.id"
                  @tap="changCity(list.nm,list.id)"
                >{{ list.nm }}</li>
              </ul>
            </div>
          </div>
        </div>
      </scroller>
    </div>
    <div class="city_index">
      <ul>
        <li
          v-for="(item,index) in cityData"
          :key="item.id"
          @click="toTarget(index)"
        >{{ item.index }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "cityList",
  data: function() {
    return {
      cityData: [],
      hostCity: [],
      isLoading: true
    };
  },
  mounted() {
    // 获取本次存储
    let cityData = window.localStorage.getItem("cityList");
    let hostCity = window.localStorage.getItem("hostCity");
    // 判断本地存储是否存在，存在就不发送ajax请求
    if (cityData && hostCity) {
      this.cityData = JSON.parse(cityData);
      this.hostCity = JSON.parse(hostCity);
      this.isLoading = false;
    } else {
      // 获取数据
      this.axios.get("/api/cityList").then(res => {
        // console.log(res.data.data)
        if (res.status === 200) {
          var data = res.data.data.cities;
          // 对数据进行处理
          this.cityData = this.formatCityList(data);
          this.hostCity = this.chooseHotCity(data);
          // 将数据进行本地存储
          window.localStorage.setItem(
            "cityList",
            JSON.stringify(this.formatCityList(data))
          );
          window.localStorage.setItem(
            "hostCity",
            JSON.stringify(this.chooseHotCity(data))
          );

          // 数据处理成功之后，将isLoading 变成false
          this.isLoading = false;
        }
      });
    }
  },
  methods: {
    // 对单词首字母进行
    formatCityList(cities) {
      // 检查数据是否传入
      // console.log(cities)
      // 这里可以作出一个判断？ 判断数据是否正确传入
      var cityList = [];
      // var hostList = [];
      // 循环遍历传递过来的数据
      for (var i = 0; i < cities.length; i++) {
        // 取出数组中每个单词的字母
        var firstLetter = cities[i].py.substring(0, 1).toUpperCase();
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
      // 处理排序
      cityList.sort(function(a, b) {
        if (a.index > b.index) {
          return 1;
        } else if (a.index < b.index) {
          return -1;
        } else {
          return 0;
        }
      });

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
      return cityList;
    },
    // 选出热门城市
    chooseHotCity(cities) {
      let hostCity = [];
      for (var i = 0; i < cities.length; i++) {
        if (cities[i].isHot === 1) {
          hostCity.push(cities[i]);
        }
      }
      return hostCity;
    },
    // 点击字母进行跳转
    toTarget(index) {
      // console.log(index)
      // 处理dom
      let h2 = this.$refs.city_sort.getElementsByTagName("h2");
      // console.log(h2)
      // console.log(this.$refs.city_sort.parentNode.scrollTop)
      // 给父级的scrollTop 设置为 当前h2的卷曲出去的高度
      // this.$refs.city_sort.parentNode.scrollTop = h2[index].offsetTop;
      // this.$refs.jump.jump(-h2[index].offsetTop);
      // 调用了组件中的方法  使用ref标记
      // 注意：将ref放在组件上，则this.$refs.组件名可以拿到组件的对象，拿到组件对象就可以调用组件对象中的方法
      this.$refs.jump.jump(-h2[index].offsetTop);
    },
    // 点击改变城市city
    changCity(nm, id) {
      // console.log(nm, id)
      // 调用vuex中的mutations中的方法进行处理  ok
      this.$store.commit("city/CITY_INFO", { nm, id });
      // 为了返回时，城市数据不再该改变。将数据本地化处理
      window.localStorage.setItem("city_nm", nm);
      window.localStorage.setItem("city_id", id);
      // 编程式导航
      this.$router.push("/movie/nowPlaying");
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
  width: 100%;
  overflow: auto;
  background: #fff;
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
  li {
    margin: 7px 0;
  }
}
</style>
