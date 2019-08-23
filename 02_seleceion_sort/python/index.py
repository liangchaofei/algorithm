'''
@Description: In User Settings Edit
@Author: your name
@Date: 2019-08-20 19:47:43
@LastEditTime: 2019-08-20 19:53:22
@LastEditors: Please set LastEditors
'''
def findSmallest(arr):
    smallest = arr[0]
    smallest_index = 0
    for i in range(1,len(arr)):
        if arr[i] < smallest:
            smallest = arr[i]
            smallest_index = i
    return smallest_index

def selectionSort(arr):
    newArr = []
    for i in range(len(arr)):
        smallest = findSmallest(arr)
        newArr.append(arr.pop(smallest))
    return newArr

print(selectionSort([5,3,6,2,10]))