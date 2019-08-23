/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-21 20:10:37
 * @LastEditTime: 2019-08-21 20:11:49
 * @LastEditors: Please set LastEditors
 */
let arr2 = [1,2,3]

const sum2 = arr => {
    return arr.reduce((prev,curr)=>{
        return prev+curr;
    })
}
console.log(sum2(arr2))