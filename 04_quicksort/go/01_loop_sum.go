/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-21 20:20:56
 * @LastEditTime: 2019-08-22 10:10:48
 * @LastEditors: Please set LastEditors
 */
package main

import "fmt"

func sum(arr []int) int {
	total := 0
	for i := 0; i < len(arr); i++ {
		total += arr[i]
	}
	return total
}

var arr = [3]int{1, 2, 3}

func main() {
	fmt.Println(sum([]int{1, 2, 3, 4}))
}
