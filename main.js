import inquirer from "inquirer";
let myBalance = 10000; // dollars
let myPin = 1245;
const pinAns = await inquirer.prompt([{
        name: "pin",
        message: "Enter your pin.",
        type: "number"
    }]);
// conditional statment
if (pinAns.pin === myPin) {
    console.log("correct your pin.");
}
else {
    console.log("incorrect pin number");
}
const operationAns = await inquirer.prompt([{
        name: "operation",
        message: "please select option",
        type: "list",
        choices: ["withdraw", "check balance"]
    }]);
if (operationAns.operation === "withdraw") {
    let amountAns = await inquirer.prompt([{
            name: "amount",
            message: "Enter your amount.",
            type: "number"
        }]);
    if (amountAns.amount <= myBalance) {
        console.log(myBalance -= amountAns.amount);
        console.log("yor remaining balance is " + myBalance);
    }
    else {
        console.log("insufficent cash");
    }
}
else {
    console.log("Your balance is " + myBalance);
}
