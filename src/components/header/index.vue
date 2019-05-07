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
        height: 80px;
        width: 100%;
        background-color: rgb(236, 96, 96);
        text-align: center;
        line-height: 80px;
        font-size: 16px;
        color: #fff;
        h1{
            font-size: 18px;
        }
    }
</style>