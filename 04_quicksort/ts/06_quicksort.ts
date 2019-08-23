/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-22 20:42:53
 * @LastEditTime: 2019-08-22 20:45:48
 * @LastEditors: Please set LastEditors
 */
const quicksort1 = (arr:number[]):number[] => {
    if(arr.length<2){
        return arr;
    }

    let middle :number = arr[0]

    let less :number[]= arr.slice(1).filter(item=>{
        return item<middle;
    }) 

    let big :number[] = arr.slice(1).filter(item=>item>middle)

    return quicksort1(less).concat([middle],quicksort1(big))
}

console.log(quicksort1([1,3,2]))