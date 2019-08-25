/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-23 20:25:25
 * @LastEditTime: 2019-08-23 20:25:25
 * @LastEditors: your name
 */
package main

import "fmt"

var book map[string]float64

func main() {
	book = make(map[string]float64)
	book["apple"] = 0.67
	book["milk"] = 1.49
	book["avocado"] = 1.49
	fmt.Println(book)
}
