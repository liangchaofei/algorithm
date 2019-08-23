/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-20 19:55:41
 * @LastEditTime: 2019-08-21 09:33:55
 * @LastEditors: Please set LastEditors
 */
var findSmallest3 = function (arr) {
    var small = arr[0];
    var small_index = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < small) {
            small = arr[i];
            small_index = i;
        }
    }
    return small_index;
};
var selectSort3 = function (arr) {
    var newArr = [];
    var len = arr.length;
    for (var i = 0; i < len; i++) {
        var small_index = findSmallest3(arr);
        newArr.push(arr.splice(small_index, 1)[0]);
    }
    return newArr;
};
console.log(selectSort3([4, 2, 1, 5]));
