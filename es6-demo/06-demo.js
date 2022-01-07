// es6简写
var title = "wengyifan";
var link = "http://wengyifan.com";
let info = {
    title,
    link,
    go(){
        console.log("This is wengyifan")
    }
}
console.log(info.go())
console.log(info["go"]())
var {title, link} = info
console.log(title)
console.log(link)