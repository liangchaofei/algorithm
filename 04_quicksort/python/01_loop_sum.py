'''
@Description: In User Settings Edit
@Author: your name
@Date: 2019-08-21 20:16:55
@LastEditTime: 2019-08-21 20:19:42
@LastEditors: Please set LastEditors
'''
def sum(arr):
    total = 0
    for i in range(len(arr)):
        total += arr[i]
    return total

arr = [1,2,3]
print(sum(arr))