/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-21 20:07:03
 * @LastEditTime: 2019-08-21 20:08:19
 * @LastEditors: Please set LastEditors
 */
var arr = [1, 2, 3];
function sum2(arr) {
  return arr.reduce(function(prev, curr) {
    return prev + curr;
  });
}

console.log(sum2(arr));
