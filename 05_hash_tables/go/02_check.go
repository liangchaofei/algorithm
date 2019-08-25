/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-23 20:43:17
 * @LastEditTime: 2019-08-23 20:45:59
 * @LastEditors: Please set LastEditors
 */
package main

import "fmt"

var voted map[string]bool

func check_voter(name string) {
	if voted[name] {
		fmt.Println("存在")
	} else {
		voted[name] = true
		fmt.Println("不存在")
	}
}

func main() {
	voted = make(map[string]bool)
	check_voter("tom")
	check_voter("mike")
	check_voter("mike")
}
