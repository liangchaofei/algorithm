/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-23 20:35:16
 * @LastEditTime: 2019-08-23 20:36:49
 * @LastEditors: Please set LastEditors
 */
let obj ={}

const check = name => {
    if(obj[name]){
        console.log('存在')
    }else{
        obj[name] = true
        console.log('不存在')
    }
}

check('11')
check('22')
check('11')