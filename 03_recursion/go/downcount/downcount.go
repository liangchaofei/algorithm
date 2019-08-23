/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-21 09:47:33
 * @LastEditTime: 2019-08-21 10:38:11
 * @LastEditors: Please set LastEditors
 */
package main

import "fmt"

func countdown(i int) {
	fmt.Println(i)

	if i <= 0 {
		return
	}
	countdown(i - 1)
}

func main() {
	countdown(5)
}
