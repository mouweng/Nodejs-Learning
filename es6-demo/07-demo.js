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
