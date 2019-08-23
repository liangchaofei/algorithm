/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-21 20:12:14
 * @LastEditTime: 2019-08-22 09:58:43
 * @LastEditors: Please set LastEditors
 */
let arr31 :number[] = [1,2,3];
const sum31 = (arr:number[]):number => {
    let total = 0;
    let len = arr.length;
    for(let i =0;i<len;i++){
        total += arr[i]
    }
    return total;
}

console.log(sum31(arr31))