/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-22 19:49:20
 * @LastEditTime: 2019-08-22 20:00:28
 * @LastEditors: Please set LastEditors
 */

 //找出数组中最大的值
function max(arr){
    var len = arr.length;
    if(len == 2){
        return arr[0] > arr[1] ? arr[0] : arr[1]
    }
    let maxVal = max(arr.slice(1))
    return arr[0] > maxVal ? arr[0] :maxVal
}

console.log(max([2,1,4]))