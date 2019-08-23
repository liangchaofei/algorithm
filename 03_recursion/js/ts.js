/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-21 09:47:17
 * @LastEditTime: 2019-08-21 10:25:47
 * @LastEditors: Please set LastEditors
 */
//  1.
var downcount3 = function (x) {
    console.log(x);
    if (x <= 0) {
        return;
    }
    downcount3(x - 1);
};
downcount3(5);
// 2.
var greet5 = function (name) {
    console.log('greet5,' + name);
};
var bye5 = function () {
    console.log('byt5');
};
var greet6 = function (name) {
    console.log('greet6,' + name);
    console.log('aaa');
    greet5(name);
    console.log('vvvv');
    bye5();
};
greet6('wo');
