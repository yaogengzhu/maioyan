// 解决跨域问题 ，数据反向代理 
module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://39.97.33.178',
                changeOrigin: true
            }
        }
    },

}

