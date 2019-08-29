'''
@Description: In User Settings Edit
@Author: your name
@Date: 2019-08-29 09:47:50
@LastEditTime: 2019-08-29 09:47:51
@LastEditors: Please set LastEditors
'''
if word_a[i] == word_b[j]:
  # The letters match.
  cell[i][j] = cell[i-1][j-1] + 1
else:
  # The letters don't match.
  cell[i][j] = max(cell[i-1][j], cell[i][j-1])