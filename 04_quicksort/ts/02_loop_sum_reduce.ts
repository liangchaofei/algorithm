/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-21 20:15:00
 * @LastEditTime: 2019-08-21 20:16:17
 * @LastEditors: Please set LastEditors
 */
let arr4 :number[] = [1,2,3]

const sum5 = (arr:number[]) :number => {
    return arr.reduce((prev,curr)=>{
        return prev+curr
    })
}
console.log(sum5(arr4))