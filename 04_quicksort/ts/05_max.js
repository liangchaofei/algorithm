/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-22 20:04:52
 * @LastEditTime: 2019-08-22 20:07:06
 * @LastEditors: Please set LastEditors
 */
var maxa = function (arr) {
    var len = arr.length;
    if (len == 2) {
        return arr[0] > arr[1] ? arr[0] : arr[1];
    }
    var maxVal = maxa(arr.slice(1));
    return arr[0] > maxVal ? arr[0] : maxVal;
};
console.log(maxa([1, 2, 3]));
