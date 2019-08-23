/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-21 09:47:17
 * @LastEditTime: 2019-08-21 10:36:48
 * @LastEditors: Please set LastEditors
 */

//  1.
const downcount6 = (x:number):void => {
    console.log(x)
    if(x<=0){
        return;
    }
    downcount3(x-1)
}
downcount3(5)

// 2.
const greet8 = (name:string):void => {
    console.log('greet5,'+name)
}

const bye6 = ():void => {
    console.log('byt5')
}

const greet7 = (name:string):void => {
    console.log('greet6,'+name)
    console.log('aaa')
    greet8(name)
    console.log('vvvv')
    bye6()
}

greet7('wo')
