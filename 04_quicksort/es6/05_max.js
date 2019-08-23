/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-22 19:53:50
 * @LastEditTime: 2019-08-22 20:04:03
 * @LastEditors: Please set LastEditors
 */
//找出数组中最大值

const max = arr => {
    let len = arr.length;
    if( len == 2 ){
        return arr[0] > arr[1] ? arr[0] : arr[1]
    }

    let maxVal = max(arr.slice(1))
    return arr[0]>maxVal ? arr[0] : maxVal;
}

console.log(max([1,2,3]))