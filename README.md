# 大前端技能学习笔记
- [【学相伴】大前端技能最通俗易懂的讲解，快速入门必看！](https://www.bilibili.com/video/BV1BU4y147pS?p=30&spm_id_from=pageDriver)

## nodejs
类似于jvm的存在，可以运行javascript
### nodejs起一个web服务
```js
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
```

### nodejs操作数据库
```js
// 1.导入mysql依赖包
var mysql = require("mysql")

// 创建mysql的Connection对象
// 配置数据库连接的信息
var connection = mysql.createConnection({
    host : "localhost",
    user : "root",
    port : 3306,
    password : "123456",
    database : "test"
});
// 连接
connection.connect();
// 执行curd
connection.query("select * from casbin_rule_test", function(error, results, fields) {
    if (error) throw error;
    console.log("results = ", results);
});
// 关闭
connection.end();
```

## ES6
### let和const命令
变量和常量的严格区分，解决var的变量穿透问题
在低版本的浏览器中，还是不支持let和const
### 模板字符串
解决字符串拼接的问题
```js
let code = "我是" + person.name + ", 我正在" + person.address + ", 我的网址是" + person.link;
let codeNew = `我是${person.name}, 我正在${person.address}, 我的网址是${person.link}`
```
### 函数默认参数
```js
function sum (a = 100, b = 100) {
    return a + b;
}
var result = sum(50, 50);
var result2 = sum();
console.log(result, " ", result2);
```

### 箭头函数
- 去掉function
- 在括号后面加箭头
- 如果逻辑代码中仅有return，可以直接全部省去
- 如果参数只有一个，括号可以省去
```
var a = function(a, b) {
    return a + b;
}
var sum = (a, b)=>{return a + b};
var sum = (a, b)=>a + b;
var double = a=>a * 2;
```
### 对象初始化简写
- 如果key和变量名字一直，可以只定义一次
- 如果value是函数，可以把:function去掉
```js
let info = {
    title : "wengyifan",
    link : "http://wengyifan.com",
    go:function(){
        console.log("This is wengyifan")
    }
}
// es6简写
var title = "wengyifan";
var link = "http://wengyifan.com";
let info2 = {
    title,
    link,
    go(){
        console.log("This is wengyifan")
    }
}
console.log(info)
console.log(info2)
```
### 对象解构
- 通过.的方式去属性值
- 通过[]的方式去属性值
### 传播操作符
```js
let info = {
    title : "wengyifan",
    link : "http://wengyifan.com",
    age : 18,
    school : "ZJU",
    go:function(){
        console.log("This is wengyifan")
    }
}
var {title, link, ...person2} = info
console.log(title)
console.log(link)
console.log(person2)
```
```shell
$ node 07-demo.js
wengyifan
http://wengyifan.com
{ age: 18, school: 'ZJU', go: [Function: go] }
```
### 数组map和reduce方法使用
- map自动循环并回填值
```js
var arr = [1,2,3,4,5,6,7]
var arr = arr.map(function(a){
    return a * 2;
})
console.log(arr)

var users = [{age : 10, name : "yifan"}, {age : 12, name : "wyf"},{age : 14, name : "wengyifan"}]
users.map(function(ele) {
    ele.age += 1
    return ele
})
console.log(users)
```
- 聚合数组
```js
var arr = [1,2,3,4,5,6,7]
var res = arr.reduce(function(a, b){
    return a + b;
})
console.log(res);
```

## Npm包管理
> Node Package Manager, Node的包管理工具，类似于maven

### 作用
1. 快速构建nodejs工程
    - npm init
    - 得到package.json的文件
2. 快速安装和依赖第三方模块
    - npm install xxx 或者 npm i xxx
    - 安装模块放入node_modules文件中
    - const mysql = require("mysql")引入
    - 所有的依赖都会记录到package.json的文件中，就类似于maven中的pom.xml
    - npm install下载所有的模块
    - 下载指定版本号 npm install xxx@版本号
3. 如何卸载
    - npm uninstall xxx

## Babel
Babel 是一个 JavaScript 编译器,Babel 是一个工具链，主要用于将采用 ECMAScript 2015+ 语法编写的代码转换为向后兼容的 JavaScript 语法，以便能够运行在当前和旧版本的浏览器或其他环境中。
```js
// Babel 输入： ES2015 箭头函数
[1, 2, 3].map(n => n + 1);

// Babel 输出： ES5 语法实现的同等功能
[1, 2, 3].map(function(n) {
  return n + 1;
});
```

## 模块化
### CommonJS模块化规范
```js
// 导出
module.exports = {
    sum : sum,
    sub : sub,
    mul : mul,
    div : div
}
```
```js
// 导入
const utils = require('./commonJS-demo')
```

### ES6模块化规范
```js
// 导出
export function getList() {
    // 在真实业务中，异步获取数据
    console.log("获取数据列表")
}
```
```js
// 导入
import {getList} from './ES6JS-demo.js'
getList()
```
- 在package.json中添加"type": "module"，不然会报错

## Webpack
> 前端资源加载和打包的工具
### 安装
```shell
npm install -g webpack webpack-cli
npm install style-loader css-loader
```
### Webpack合并JS/CSS
- 创建nodejs项目 npm init -y
- 创建一个src目录
- 在src存放两个需要合并的util.js和common.js和style.css
- 准备一个入口文件main.js ，模块集中引入
- 在根目录下定义个webpack.config.js文件配置打包的规则
- 执行`webpack`查看效果