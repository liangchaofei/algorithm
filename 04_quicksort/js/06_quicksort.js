/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-22 20:37:25
 * @LastEditTime: 2019-08-22 20:40:10
 * @LastEditors: Please set LastEditors
 */
function quicksort(arr){
    if(arr.length< 2){
        return arr;
    }

    let middle = arr[0]

    let less = arr.slice(1).filter(item=>{
        return item<middle;
    })

    let big = arr.slice(1).filter(item => {
        return item>middle;
    })

    return quicksort(less).concat([middle],quicksort(big))
}

console.log(quicksort([2,1,4]))