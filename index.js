#! /usr/bin/env node 
import inquirer from "inquirer";
//initialize user pin and pin code 
let myBalance = 10000;
let myPin = 2468;
//print wellcome message
console.log("\n\tWellcome to aiman's ATM machine\n");
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your pin code:",
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("Pin is correct, Login successfully!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "Select an operation",
            choices: ["Withdraw Amount", "Check balance"]
        }
    ]);
    if (operationAns.operation === "Withdraw Amount") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter the amount to withdraw",
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log("insufficient balance");
        }
        else {
            myBalance -= amountAns.amount;
            console.log(`${amountAns.amount} Withdraw successfully`);
            console.log(`your remaining balance is: ${myBalance}`);
        }
    }
    else if (operationAns.operation === "Check balance") {
        console.log(`Your account balance is: ${myBalance}`);
    }
}
else {
    console.log("Pin is incorrect, Try again!");
}
