// 导入包
const http = require('http')

// 创建一个httpserver服务
// 监听一个端口
http.createServer(function(request, response) {
    // 设置content-type
    response.writeHead(200, {"Content-type" : 'text/plain'});
    // 给浏览器输出内容
    response.end("hello,world!!!");
}).listen(3001)
// 启动服务
console.log("启动服务...")
// 在浏览器访问
