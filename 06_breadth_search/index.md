<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-25 20:08:53
 * @LastEditTime: 2019-08-26 15:02:33
 * @LastEditors: Please set LastEditors
 -->
### 广度优先搜索
+ 广度优先搜索之处是否有从A到B的路径
+ 如果有，找出两样东西之间的最短距离
+ 面临类似寻找最短路径的问题时，可尝试使用图来建立模型，再使用广度优先搜索来解决问题。
+ 有向图中的边为箭头，箭头的方向指定了关系的方向，如:rama->adit表示rama欠adit钱
+ 无向图的边不带箭头，其中关系是双向的
+ 队列先进先出
+ 栈先进后出
+ 你需要按加入顺序检查搜索列表中的人，否则找到的不是最短路径，因此搜索列表必须是队列
+ 对于检查过的人，务必不要再去检查，否则可能导致无限循环

+ 数组链接元素
```python
    arr = []
    a = 'a'
    arr.extend(a)
```

+ 判断某个元素是否在列表中
```python
    aaa = 'a'
    arr = ['a','as']
    if aaa in arr:
```

+ 定义队列（list）
```python
from collections import deque

arr = deque()
```

+ 获取列表第一个元素，类比js中的shift()
```python
    arr.popleft()
```