/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-22 09:44:22
 * @LastEditTime: 2019-08-22 09:53:42
 * @LastEditors: Please set LastEditors
 */
// 编写一个递归函数来计算列表包含的元素数
var arr = [1,2,3]
function total(arr){
    if(arr.length == 0 ){
        return 0;
    }
    return 1+total(arr.slice(1))
}
console.log(total([1,2,3]))