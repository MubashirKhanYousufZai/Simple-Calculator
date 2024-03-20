import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "enter first number", type: "number", name: "first number" },
  { message: "enter second number", type: "number", name: "second number"},
  { message: "select one of the operators to perform action", type: "list", name: "operators",choices:["Addition","Subtraction","Multiplication","Division"],}
]);

console.log(answer);

