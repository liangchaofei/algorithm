'''
@Description: In User Settings Edit
@Author: your name
@Date: 2019-08-22 20:46:11
@LastEditTime: 2019-08-22 20:55:25
@LastEditors: Please set LastEditors
'''
def quicksort(arr):
    if len(arr) < 2:
        return arr
    
    pivot = arr[0]

    less = [i for i in arr[1:] if i <= pivot]
    # sub-array of all the elements greater than the pivot
    greater = [i for i in arr[1:] if i > pivot]
    
    return quicksort(less)+[pivot]+quicksort(greater)


print(quicksort([1,3,2]))