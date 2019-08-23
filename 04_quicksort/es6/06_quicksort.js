/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-22 20:41:00
 * @LastEditTime: 2019-08-22 20:42:34
 * @LastEditors: Please set LastEditors
 */
const quicksort = arr => {
    if(arr.length<2){
        return arr;
    }

    let middle = arr[0]

    let less = arr.slice(1).filter(item => {
        return item<middle;
    })

    let big = arr.slice(1).filter(item=>{
        return item>middle;
    })

    return quicksort(less).concat([middle],quicksort(big))
}

console.log(quicksort([1,3,2]))