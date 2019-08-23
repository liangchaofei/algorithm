/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-21 20:15:00
 * @LastEditTime: 2019-08-21 20:16:17
 * @LastEditors: Please set LastEditors
 */
var arr4 = [1, 2, 3];
var sum5 = function (arr) {
    return arr.reduce(function (prev, curr) {
        return prev + curr;
    });
};
console.log(sum5(arr4));
