/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-22 09:40:07
 * @LastEditTime: 2019-08-22 09:41:35
 * @LastEditors: Please set LastEditors
 */
const sumv = (arr:number[]):number => {
    if(arr.length == 1){
        return arr[0]
    }

    return arr[0] + sumv(arr.slice(1))
}
console.log(sumv([1,2,3]))