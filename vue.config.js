const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    devServer: {
        client: {
            overlay: false // 不要全屏显示错误
        },
        proxy: {
            //一旦 devServer服务器收到 /dev-api/xxx 的请求，就会把请求转发到另一个服务器http://rb.atguigu.cn
            '/dev-api': {
                target: 'http://rb.atguigu.cn',
                changeOrigin: true, // 这个可以省略
                pathRewrite: { '^/dev-api': '' } // 发送请求时，请求路径重写: 将 /dev-api/xxx 重写成 /xxx  (去掉 /dev-api)
            }
        }
    }
})
