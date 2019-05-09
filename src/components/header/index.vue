<template>
    <div id="header">
       <h1>{{ title }}</h1>
    </div>
</template>

<script>
export default {
    // 添加name ，放便好调试。
    props:{
        title:{
            type:String,
            default:'喵眼电影'
        }
    }
}
</script>

<style lang="scss" scoped>
    #header{
        position: fixed;
        top: 0;
        left:0;
        height: 40px;
        width: 100%;
        background-color: deeppink;
        z-index: 999;
        text-align: center;
        line-height: 40px;
        font-size: 18px;
        color: #fff;
        h1{
            font-size: 18px;
        }
    }
</style>