// 引入path模块
const path = require("path")
// 定义JS打包规则
module.exports = {
    // 入口函数从哪里开始编译打包
    entry : "./src/main.js",
    // 编译成功以后把内容输出到哪里去
    output : {
        // 定义输出指定的目录
        path:path.resolve(__dirname, "./dist"),
        // 生成一个js文件
        filename : "bundle.js"
    },
    module : {
        rules:[{
            test: /\.css$/,
            use:["style-loader", "css-loader"]
        }]
    }
}
