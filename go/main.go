package main

// import format library
import "fmt"

// require main() to run just like *public static void main(String[] args)* in JAVA
func main() {
	/*
		Declare a variable:
			var sampleInputStr string = "Hello World!";
		Declare a variable short-handed:
			sampleInputStr := "Hello World!";
			(:= will assume the data type based on the input data)
	*/

	sampleInputStr := "Hello World!";
	sayHello(sampleInputStr);
};

// Declare a function w/ str as the parameter
func sayHello(str string) {
	fmt.Println(str);
};