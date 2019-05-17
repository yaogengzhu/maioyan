<template>
  <div class="info">
    <ul>
      <li>
        <h2>
          万达影院
          <span class="price">23元起</span>
        </h2>
        <div class="address">
          <p>
            <span class="name">当阳市子龙路新时代文化广场四楼电影城</span>
            <span class="distance">900km</span>
          </p>
        </div>
        <div class="card">
          <span>改签</span>
          <span>退</span>
          <span>折扣卡</span>
        </div>
      </li>
      <li>
        <h2>
          万达影院
          <span class="price">23元起</span>
        </h2>
        <div class="address">
          <p>
            <span class="name">当阳市子龙路新时代文化广场四楼电影城</span>
            <span class="distance">900km</span>
          </p>
        </div>
        <div class="card">
          <span>改签</span>
          <span>退</span>
          <span>折扣卡</span>
        </div>
      </li>
      <li>
        <h2>
          万达影院
          <span class="price">23元起</span>
        </h2>
        <div class="address">
          <p>
            <span class="name">当阳市子龙路新时代文化广场四楼电影城</span>
            <span class="distance">900km</span>
          </p>
        </div>
        <div class="card">
          <span>改签</span>
          <span>退</span>
          <span>折扣卡</span>
        </div>
      </li>
      <li>
        <h2>
          万达影院
          <span class="price">23元起</span>
        </h2>
        <div class="address">
          <p>
            <span class="name">当阳市子龙路新时代文化广场四楼电影城</span>
            <span class="distance">900km</span>
          </p>
        </div>
        <div class="card">
          <span>改签</span>
          <span>退</span>
          <span>折扣卡</span>
        </div>
      </li>
      <li>
        <h2>
          万达影院
          <span class="price">23元起</span>
        </h2>
        <div class="address">
          <p>
            <span class="name">当阳市子龙路新时代文化广场四楼电影城</span>
            <span class="distance">900km</span>
          </p>
        </div>
        <div class="card">
          <span>改签</span>
          <span>退</span>
          <span>折扣卡</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
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
            width: 300px;
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
      }
    }
  }
}
</style>
