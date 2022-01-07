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

