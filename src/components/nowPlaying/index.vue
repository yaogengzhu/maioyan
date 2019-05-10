<template>
  <div id="nowPlaying">
    <ul>
      <li class="box">
        <div class="img">
          <img src="../../assets/movie.jpg" alt>
        </div>
        <div class="info">
          <h2>
            复仇者联盟：终极之战
            <img src="../../assets/max.png" alt>
          </h2>
          <p>
            影评：
            <span>9.0</span>
          </p>
          <p>主演: 小罗伯特·唐尼,克里斯·埃文斯,马克·鲁法洛</p>
          <p>今天25家影院放映252场</p>
        </div>
        <div class="buy">
          <button>购买</button>
        </div>
      </li>
      <li class="box">
        <div class="img">
          <img src="../../assets/movie.jpg" alt>
        </div>
        <div class="info">
          <h2>
            复仇者联盟：终极之战
            <img src="../../assets/max.png" alt>
          </h2>
          <p>
            影评：
            <span>9.0</span>
          </p>
          <p>主演: 小罗伯特·唐尼,克里斯·埃文斯,马克·鲁法洛</p>
          <p>今天25家影院放映252场</p>
        </div>
        <div class="buy">
          <button>购买</button>
        </div>
      </li>
      <li class="box">
        <div class="img">
          <img src="../../assets/movie.jpg" alt>
        </div>
        <div class="info">
          <h2>
            复仇者联盟：终极之战
            <img src="../../assets/max.png" alt>
          </h2>
          <p>
            影评：
            <span>9.0</span>
          </p>
          <p>主演: 小罗伯特·唐尼,克里斯·埃文斯,马克·鲁法洛</p>
          <p>今天25家影院放映252场</p>
        </div>
        <div class="buy">
          <button>购买</button>
        </div>
      </li>
      <li class="box">
        <div class="img">
          <img src="../../assets/movie.jpg" alt>
        </div>
        <div class="info">
          <h2>
            复仇者联盟：终极之战
            <img src="../../assets/max.png" alt>
          </h2>
          <p>
            影评：
            <span>9.0</span>
          </p>
          <p>主演: 小罗伯特·唐尼,克里斯·埃文斯,马克·鲁法洛</p>
          <p>今天25家影院放映252场</p>
        </div>
        <div class="buy">
          <button>购买</button>
        </div>
      </li>
      <li class="box">
        <div class="img">
          <img src="../../assets/movie.jpg" alt>
        </div>
        <div class="info">
          <h2>
            复仇者联盟：终极之战
            <img src="../../assets/max.png" alt>
          </h2>
          <p>
            影评：
            <span>9.0</span>
          </p>
          <p>主演: 小罗伯特·唐尼,克里斯·埃文斯,马克·鲁法洛</p>
          <p>今天25家影院放映252场</p>
        </div>
        <div class="buy">
          <button>购买</button>
        </div>
      </li>
      <li class="box">
        <div class="img">
          <img src="../../assets/movie.jpg" alt>
        </div>
        <div class="info">
          <h2>
            复仇者联盟：终极之战
            <img src="../../assets/max.png" alt>
          </h2>
          <p>
            影评：
            <span>9.0</span>
          </p>
          <p>主演: 小罗伯特·唐尼,克里斯·埃文斯,马克·鲁法洛</p>
          <p>今天25家影院放映252场</p>
        </div>
        <div class="buy">
          <button>购买</button>
        </div>
      </li>
      <li class="box">
        <div class="img">
          <img src="../../assets/movie.jpg" alt>
        </div>
        <div class="info">
          <h2>
            复仇者联盟：终极之战
            <img src="../../assets/max.png" alt>
          </h2>
          <p>
            影评：
            <span>9.0</span>
          </p>
          <p>主演: 小罗伯特·唐尼,克里斯·埃文斯,马克·鲁法洛</p>
          <p>今天25家影院放映252场</p>
        </div>
        <div class="buy">
          <button>购买</button>
        </div>
      </li>
      <li class="box">
        <div class="img">
          <img src="../../assets/movie.jpg" alt>
        </div>
        <div class="info">
          <h2>
            复仇者联盟：终极之战
            <img src="../../assets/max.png" alt>
          </h2>
          <p>
            影评：
            <span>9.0</span>
          </p>
          <p>主演: 小罗伯特·唐尼,克里斯·埃文斯,马克·鲁法洛</p>
          <p>今天25家影院放映252场</p>
        </div>
        <div class="buy">
          <button>购买</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
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
