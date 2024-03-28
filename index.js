#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "please guess number",
    },
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("Cogratulation you guessed rigth number");
}
else {
    console.log("you guessed wrong number");
}
