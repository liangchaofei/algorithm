/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-22 20:17:15
 * @LastEditTime: 2019-08-22 20:29:14
 * @LastEditors: Please set LastEditors
 */
package main

import "fmt"

func max(arr []int) int {
	if len(arr) == 2 {
		if arr[0] > arr[1] {
			return arr[0]
		} else {
			return arr[1]
		}
	}

	var maxVal = max(arr[1:])
	if arr[0] > maxVal {
		return arr[0]
	} else {
		return maxVal
	}
}

func main() {
	fmt.Println(max([]int{1, 2, 3}))
}
