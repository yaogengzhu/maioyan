<template>
  <div id="login">
    <form action>
      <label for>
        账号：
        <input type="text" name placeholder="请输入用户名" autofocus>
      </label>
      <label for>
        密码：
        <input type="password" placeholder="请输入用户密码">
      </label>
    </form>
    <div class="button">
      <button class="register">注册</button>
      <button>登陆</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "login"
};
</script>

<style lang="scss" scoped>
#login {
  margin-top: 60px;
  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 20px;
    label {
      width: 100%;
      margin: 15px;
      input {
        width: 70%;
        height: 40px;
        padding: 0 5px;
        border: 1px solid #ddd;
      }
    }
  }
  .button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    button {
      width: 70px;
      height: 40px;
      text-align: center;
      line-height: 30px;
      background-color: deeppink;
      border: none;
      color: #fff;
      margin-left: 30px;
    }
    .register {
      margin-left: -30px;
    }
  }
}
</style>
