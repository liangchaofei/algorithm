/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-21 10:41:55
 * @LastEditTime: 2019-08-21 10:41:55
 * @LastEditors: your name
 */
package main

import "fmt"

func fact(x int) int {
	if x == 1 {
		return 1
	}

	return x * fact(x-1)
}

func main() {
	fmt.Println(fact(5))
}
