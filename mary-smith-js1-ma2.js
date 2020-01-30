// Module Assignment 2

// level 1

/*
Question 1
Refer: lesson 1
Create a function expression by assigning an anonmyous function to a variable called myFunctionExpression. 
The function should console log your name.
*/


const myFunctionExpression = function(){
    console.log("my name is","","ben")

}

myFunctionExpression();

/*
Question 2
Refer: lesson 2
Select the button in the HTML below by its class. 

Add a click event listener. 
The callback function passed to the event listener should log the sentence I was clicked.
You can pass the function in directly, declare it and pass it in by its name or assign it to a variable and pass it in by the variable name.
<button class="btn">Click me</button>
*/


const container = document.querySelectorAll(".button");