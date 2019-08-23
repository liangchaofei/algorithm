/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-22 20:56:45
 * @LastEditTime: 2019-08-22 20:56:45
 * @LastEditors: your name
 */
package main

import "fmt"

func quicksort(list []int) []int {
	if len(list) < 2 {
		return list
	} else {
		pivot := list[0]

		var less = []int{}
		var greater = []int{}
		for _, num := range list[1:] {
			if pivot > num {
				less = append(less, num)
			} else {
				greater = append(greater, num)
			}
		}

		less = append(quicksort(less), pivot)
		greater = quicksort(greater)
		return append(less, greater...)
	}
}

func main() {
	fmt.Println(quicksort([]int{10, 5, 2, 3}))
}
