/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-22 09:54:25
 * @LastEditTime: 2019-08-22 09:55:42
 * @LastEditors: Please set LastEditors
 */
const total = arr => {
    if(arr.length ==0){
        return 0;
    }
    return 1 + total(arr.slice(1))
}

console.log(total([1,2,3]))