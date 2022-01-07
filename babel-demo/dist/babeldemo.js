"use strict";

var arr = [1, 2, 3, 4, 5, 6, 7];
var res = arr.reduce(function (a, b) {
  return a + b;
});
console.log(res);