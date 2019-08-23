'''
@Description: In User Settings Edit
@Author: your name
@Date: 2019-08-22 20:08:22
@LastEditTime: 2019-08-22 20:14:13
@LastEditors: Please set LastEditors
'''
def max(arr):
    if len(arr) == 2:
        return arr[0] if arr[0] > arr[1] else arr[1]
    maxVal = max(arr[1:])

    return arr[0] if arr[0] > maxVal else maxVal


print(max([1,2,3]))