/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-22 20:42:53
 * @LastEditTime: 2019-08-22 20:45:48
 * @LastEditors: Please set LastEditors
 */
var quicksort1 = function (arr) {
    if (arr.length < 2) {
        return arr;
    }
    var middle = arr[0];
    var less = arr.slice(1).filter(function (item) {
        return item < middle;
    });
    var big = arr.slice(1).filter(function (item) { return item > middle; });
    return quicksort1(less).concat([middle], quicksort1(big));
};
console.log(quicksort1([1, 3, 2]));
