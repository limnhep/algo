package main

import (
	"bufio"
	"fmt"
	"myapp/doctor"
	"os"
	"strings"
);

func main(){

	reader := bufio.NewReader(os.Stdin);

	whatToSay := doctor.Intro();

	fmt.Println(whatToSay);

	for {
		fmt.Print("-> ");
		userInput, _ := reader.ReadString('\n');

		// Replace the enter key for Window users w/ ""
		userInput = strings.Replace(userInput, "\r\n", "", -1);

		// Replace the enter key for Mac user w/ ""
		userInput = strings.Replace(userInput, "\n", "", -1);

		if (strings.ToLower(userInput) == "quit") {
			break;
		} else {
			response := doctor.Response(userInput);
			fmt.Println(response);
		};
	};
};

