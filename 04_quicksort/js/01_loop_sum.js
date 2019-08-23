/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-21 20:01:36
 * @LastEditTime: 2019-08-21 20:06:07
 * @LastEditors: Please set LastEditors
 */

//数组求和
var arr = [1,2,3];
function sum(arr){
    var sum = 0;
    for(var i=0;i<arr.length;i++){
        sum += arr[i]
    }
    return sum;
}
console.log(sum(arr))