/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-20 19:55:41
 * @LastEditTime: 2019-08-21 10:35:44
 * @LastEditors: Please set LastEditors
 */
const findSmallest4 = arr => {
    let small = arr[0]
    let small_index = 0;
    for(let i =0;i<arr.length;i++){
        if(arr[i]<small){
            small = arr[i]
            small_index = i;
        }
    }
    return small_index;
}

const selectSort4 = arr => {
    let newArr = [];
    let len = arr.length;
    for(let i =0;i<len;i++){
        let small_index = findSmallest3(arr)
        newArr.push(arr.splice(small_index,1)[0])
    }
    return newArr;
}

console.log(selectSort4([4,2,1,5]))