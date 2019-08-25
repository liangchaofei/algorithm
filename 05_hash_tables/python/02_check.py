'''
@Description: In User Settings Edit
@Author: your name
@Date: 2019-08-23 20:38:59
@LastEditTime: 2019-08-23 20:42:03
@LastEditors: Please set LastEditors
'''
obj = {}

def check(name):
    if(obj.get(name)):
        print("Hello World")
    else:
        obj[name] = True
        print("Hello World22")

check('a')
check('c')
check('a')