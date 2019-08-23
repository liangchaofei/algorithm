'''
@Description: In User Settings Edit
@Author: your name
@Date: 2019-08-21 09:47:33
@LastEditTime: 2019-08-21 10:32:07
@LastEditors: Please set LastEditors
'''

# 1
def downcount(x):
    print(x)
    if(x <= 0):
        return
    
    downcount(x-1)

downcount(5)


# 2
def greet2(name):
    print('greet2' + name)

def bye():
    print('bye')

def greet(name):
    print('greet,'+name)
    print('aaa')
    greet2(name)
    print('bbb')
    bye()

greet('fei')

# 3
def fact(n):
    if(n<=1):
        return 1
    return n*fact(n-1)

print(fact(5))