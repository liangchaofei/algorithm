/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-23 20:33:19
 * @LastEditTime: 2019-08-23 20:34:58
 * @LastEditors: Please set LastEditors
 */
var obj = {}

function check(name){
    if(obj[name]){
        console.log('存在')
    }else{
        obj[name] = true;
        console.log('不存在')
    }
}

check('aa')
check('bb')
check('aa')