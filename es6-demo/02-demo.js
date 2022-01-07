var person = {
    name : "yifan",
    address : "hangzhou",
    link : "http://wengyifan.com"
}
let code = "我是" + person.name + ", 我正在" + person.address + ", 我的网址是" + person.link;
console.log(code);


let codeNew = `我是${person.name}, 我正在${person.address}, 我的网址是${person.link}`
console.log(codeNew)