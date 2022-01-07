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