function binary_search(data,item){
    let low = 0;
    let high = data.length-1;
    while(low <= high){
        let mid = parseInt((low+high) /2);
        let quess = data[mid]
        if(quess == item){
            return mid;
        }
        if(item<quess){
            high = mid -1
        }else{
            low = mid +1
        }
    }
    return null;
}
let list = [1,3,5,7,9]
console.log(binary_search(list,3))
console.log(binary_search(list,-1))