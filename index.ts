#! /usr/bin/env node

import  inquirer from "inquirer"; 

const answer = await inquirer.prompt([ 
 {message:"Enter First number", type:"number", name: "firstNumber"},
 {message:"Enter second number", type: "number", name: "secondNumber"},
 {
    message:"select one of the operators to perform action",
    type: "list",
    name: "Operators",
    choices:["Addition" , "Subtraction" ,"Multiplication", "Division"]
}, 
]);

console.log(answer);

// conditional statement
if (answer.Operators === "Addition") {
    console.log( answer.firstNumber + answer.secondNumber);
}else if (answer.Operators === "Subtraction") {
    console.log( answer.firstNumber - answer.secondNumber);
}else if (answer.Operators === "Multiplication") {
    console.log( answer.firstNumber * answer.secondNumber);
}else if (answer.Operators === "Division") {
    console.log( answer.firstNumber / answer.secondNumber);
}else{
    console.log("please select volid operators")
}

