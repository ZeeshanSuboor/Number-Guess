#! /usr/bin/env node

import inquirer from "inquirer"

// Random number generation by comupter between 0 to 10
const randomnumber = Math.floor(Math.random() * 10);

// Nummber guess by player
  const answer = await inquirer.prompt(
[
    {
    name: "userguessednumber",
    type: "number",
    message:"Please type a number between less then 10: "
    }
]
  );

  //comparison and results announcement
  if (randomnumber==answer.userguessednumber)
  {
    console.log("Your guess is correct ! Congratulations")
  } else
  {
    console.log("Number you geuessed is not correct. Correct Number was " + randomnumber)
  };
 