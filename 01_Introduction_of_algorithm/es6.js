let binary_search2 = (data,item) => {
    let low = 0;
    let high = data.length-1;
    while(low<=high){
        let mid = parseInt((low+high)/2);
        let quess = data[mid]
        if(quess == item){
            return mid;
        }
        if(quess<item){
            low = mid +1;
        }else{
            high =mid-1
        }
    }
    return null;
}

let data = [1,3,5,7,9,10]
console.log(binary_search2(data,1))
console.log(binary_search2(data,-1))