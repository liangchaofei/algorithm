/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-22 09:56:47
 * @LastEditTime: 2019-08-22 09:58:06
 * @LastEditors: Please set LastEditors
 */
// 编写一个递归函数来计算列表包含的元素数

const total1 = (arr:number[]):number => {
    if(arr.length == 0){
        return 0;
    }
    return 1 + total1(arr.slice(1))
}
console.log(total1([1,2,3]))