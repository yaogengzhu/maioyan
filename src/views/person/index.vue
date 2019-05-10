<template>
    <div id="person">
       <Header title="个人中心"/>
       <div class="content">
           登陆
       </div>
       <Footer />
    </div>
</template>

<script>
import Header from '@/components/header'
import Footer from '@/components/footer'
export default {
    name:'person',
    components:{
        Header,
        Footer
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
