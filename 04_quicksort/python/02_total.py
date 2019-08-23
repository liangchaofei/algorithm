'''
@Description: In User Settings Edit
@Author: your name
@Date: 2019-08-22 09:59:01
@LastEditTime: 2019-08-22 10:02:48
@LastEditors: Please set LastEditors
'''


def total(arr):
    if len(arr) ==0 :
        return 0
    
    return 1 + total(arr[1:])

print(total([1,2,3]))