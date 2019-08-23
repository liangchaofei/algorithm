/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-21 10:38:29
 * @LastEditTime: 2019-08-21 10:40:32
 * @LastEditors: Please set LastEditors
 */
package main

import "fmt"

func greet2(name string) {
	fmt.Println("greet2" + name)
}

func bye() {
	fmt.Println("bye")
}

func greet(name string) {
	fmt.Println("greet" + name)
	fmt.Println("aaa")
	greet2(name)
	fmt.Println("bbb")
	bye()
}

func main() {
	greet("audit")
}
