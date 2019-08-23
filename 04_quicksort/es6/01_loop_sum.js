/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-21 20:08:44
 * @LastEditTime: 2019-08-21 20:09:56
 * @LastEditors: Please set LastEditors
 */
let arr = [1,2,3]
const sum = arr => {
    let total = 0;
    let len = arr.length;
    for(let i =0;i<len;i++){
        total+=arr[i]
    }
    return total;
}
console.log(sum(arr))