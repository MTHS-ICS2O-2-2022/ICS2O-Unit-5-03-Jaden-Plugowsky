// Created by: Jaden Plugowsky
// Created on: May 2023
//
// This program takes a user-given age and checks which movie ratings that age is allowed to see

package main

import "fmt"

var age int

func main() {
	// This function takes a user-given age and checks which movie ratings that age is allowed to see
	// Input
	fmt.Println("This program takes a user-given age and checks which movie ratings that age is allowed to see.")
	fmt.Println("\nEnter an age: ")
	fmt.Scanln(&age)

	// Process
	if age >= 0 {
		if age > 17 {
			fmt.Println("\nYou can see an R-rated or NC-17 movie by yourself.")
		} else if age > 12 {
			fmt.Println("\nYou can see a PG-13 rated movie by yourself.")
		} else if age > 6 {
			fmt.Println("\nYou are likely allowed to see PG movies with a guardian nearby, along with any G-rated movies.")
		} else {
			fmt.Println("\nYou are only able to watch G-rated movies.")
		}
	} else {
		fmt.Println("\nInput is not a possible age, try again.")
	}
	// Output
	fmt.Println("\nDone.")
}
