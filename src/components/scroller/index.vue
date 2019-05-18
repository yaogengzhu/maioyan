<template>
  <div class="box1" ref="box1">
    <slot></slot>
  </div>
</template>

<script>
//  引入better-scroll
import BScroll from "better-scroll";
export default {
  name: "scroller",
  data() {
    return {};
  },
  props: {
    changeScroll: {
      type: Function,
      default: function() {}
    },
    changeTouchEnd: {
      type: Function,
      default: function() {}
    }
  },
  mounted() {
    // 实例化better-scroll
    var scroll = new BScroll(this.$refs.box1, {
      tap: true,
      // scroll重要参数，必写
      probeType: 1
    });
    // 将scroll方法存入实例中
    this.scroll = scroll;
    //  处理滚动事件
    scroll.on("scroll", pos => {
      this.changeScroll(pos);
    });
    // 处理滚动完成后事件
    scroll.on("touchEnd", pos => {
      this.changeTouchEnd(pos);
    });
  },
  methods: {
    // better-scroll 中有滚动到指定位置的方法
    jump(y) {
      this.scroll.scrollTo(0, y);
    }
  }
};
</script>

<style scoped>
.box1 {
  height: 100%;
}
</style>
