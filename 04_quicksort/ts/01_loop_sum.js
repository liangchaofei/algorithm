/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-21 20:12:14
 * @LastEditTime: 2019-08-21 20:14:30
 * @LastEditors: Please set LastEditors
 */
var arr3 = [1, 2, 3];
var sum3 = function (arr) {
    var total = 0;
    var len = arr.length;
    for (var i = 0; i < len; i++) {
        total += arr[i];
    }
    return total;
};
console.log(sum3(arr3));
