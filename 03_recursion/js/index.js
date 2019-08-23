/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-21 09:47:17
 * @LastEditTime: 2019-08-21 10:15:58
 * @LastEditors: Please set LastEditors
 */

// 1.
function countdown(n){
    console.log(n)
    if(n<0){
        return;
    }

    countdown(n-1)
}
countdown(5)


// 2.
function greet2(name){
    console.log('how are you,' +name)
}

function bye(){
    console.log('bye')
}

function greet(name){
    console.log('hello'+name)
    greet2(name)
    console.log('aaaa')
    bye()
}

greet('fei')


// 3.
function fact(x){
    if(x === 1){
        return 1;
    }
    return x * fact(x-1)
}
console.log(fact(5))
