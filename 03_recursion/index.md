<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-21 09:46:56
 * @LastEditTime: 2019-08-21 10:08:24
 * @LastEditors: Please set LastEditors
 -->
## 递归

### 基线条件
+ 停止函数执行，避免无限循环
### 递归条件
+ 函数调用自己
```python
    def countdown(i):
        print i
        if i<=0:   //基线条件
            return  
        else:
            countdown(i-1)  //递归条件
```

## 栈
### 调用栈
### 递归调用栈

## 总结
+ 递归指的是调用自己的函数
+ 每个递归函数都有两个条件：基线条件和递归条件
+ 栈有两种操作：压入和弹出
+ 所有函数调用都进入调用栈
+ 调用栈可能很长，这将占用大量的内存