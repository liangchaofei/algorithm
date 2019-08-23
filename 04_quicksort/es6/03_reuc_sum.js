/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-22 09:38:32
 * @LastEditTime: 2019-08-22 09:39:41
 * @LastEditors: Please set LastEditors
 */
const suma = arr => {
    if(arr.length == 1){
        return arr[0]
    }

    return arr[0] + suma(arr.slice(1))
}
console.log(suma([1,2,3]))