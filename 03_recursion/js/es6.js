/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-21 09:47:33
 * @LastEditTime: 2019-08-21 10:21:40
 * @LastEditors: Please set LastEditors
 */
// 1.

const countdown2 = i => {
    console.log(i)
    if(i<=0){
        return ;
    }
    countdown2(i-1)
}

countdown2(5)

// 2.

const greet3 = name => {
    console.log('greet3,'+name)
}

const bye2 = () => {
    console.log('bye')
}

const greet4 = name => {
    console.log('greet4,'+name)
    console.log('aaa')
    greet3(name)
    console.log('bbb')
    bye2()
}

greet4('haha')


// 3.
const fact2 = x => {
    if(x ===1){
        return 1
    }
    return x*fact2(x-1)
}
console.log(fact2(5))