/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-20 19:55:21
 * @LastEditTime: 2019-08-20 20:03:57
 * @LastEditors: Please set LastEditors
 */
function findSmallest(arr){
    var small = arr[0]
    var small_index = 0;
    for(var i =0;i<arr.length;i++){
        if(arr[i]<small){
            small = arr[i]
            small_index = i
        }
    }
    return small_index;
}

function selectSort(arr){
    var newArr = [];
    var len = arr.length;
    for(var i =0;i<len;i++){
        var small_index = findSmallest(arr);
        newArr.push(arr.splice(small_index, 1)[0]);
    }
    return newArr;
}
console.log(selectSort([5,3,6,2,10]))