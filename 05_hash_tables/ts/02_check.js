/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-23 20:36:58
 * @LastEditTime: 2019-08-23 20:38:31
 * @LastEditors: Please set LastEditors
 */
var obj2 = {};
var check2 = function (name) {
    if (obj2[name]) {
        console.log('存在');
    }
    else {
        obj2[name] = true;
        console.log('不存在');
    }
};
check2('a');
check2('v');
check2('a');
