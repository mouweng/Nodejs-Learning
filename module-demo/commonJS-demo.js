// 工具类
const sum = function(a, b) {
    return a + b;
}
const sub = function(a, b) {
    return a - b;
}
const mul = function(a, b) {
    return a * b;
}
const div = function(a, b) {
    return a / b;
}
// 导出给别人使用
module.exports = {
    sum : sum,
    sub : sub,
    mul : mul,
    div : div
}