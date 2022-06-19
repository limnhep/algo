package main

import (
	"bufio"
	"fmt"
	"os"
)

const prompt = "and press ENTER when ready.";

func main() {
	var firstNumber = 1;
	var secondNumber = 2;
	var subtraction = 3;
	// var answer int;

	reader := bufio.NewReader(os.Stdin);

	// Instructions

	fmt.Println("Guess The Number Game");
	fmt.Println("---------------------");
	fmt.Println("");

	// Guess the number
	fmt.Println("Think of a NUMBER between 1 and 10", prompt);
	reader.ReadString('\n');

	// Take the user through the game
	fmt.Println("Multiply the NUMBER by", firstNumber, prompt);
	reader.ReadString('\n');

	fmt.Println("Now multiply the result by", secondNumber, prompt);
	reader.ReadString('\n');

	fmt.Println("Divide the NUMBER by the number you originally thought of", prompt);
	reader.ReadString('\n');

	fmt.Println("Now subtract", subtraction, prompt);
	reader.ReadString('\n');

	// Solution
};