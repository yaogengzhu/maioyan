<template>
    <div id="person">
       <Header title="个人中心"/>
       <div class="content">
           <!-- 登陆 -->
           <login></login>
       </div>
       <Footer />
    </div>
</template>

<script>
import Header from '@/components/header'
import Footer from '@/components/footer'
// 导入组件
import login from '@/components/personIndex/login'
export default {
    name:'person',
    components:{
        Header,
        Footer,
        login
    }
}
</script>

<style lang="scss" scoped>
#person{
    .content{
        margin-top: 40px;
    }
}
</style>
