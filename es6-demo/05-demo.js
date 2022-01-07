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