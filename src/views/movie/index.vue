<template>
    <div>
       <Header title="喵眼电影"/>
       <Footer />
    </div>
</template>

<script>
// 导入组件 
import Header from '@/components/header'
import Footer from '@/components/footer'
export default {
    name:'movie',
    components:{
        Header,
        Footer
    }
}
</script>

<style>

</style>
