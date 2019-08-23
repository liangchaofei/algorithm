/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-22 09:33:37
 * @LastEditTime: 2019-08-22 09:37:04
 * @LastEditors: Please set LastEditors
 */
function sumCount(arr){
    if(arr.length === 1){
        return arr[0]
    }
    return arr[0] + sumCount(arr.slice(1));
}

console.log(sumCount([1,2,3]))