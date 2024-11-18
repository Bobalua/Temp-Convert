import {stdin, stdout} from "process";
import * as readline from 'node:readline/promises';

// 1. request input from user
// 2. define variable as input temp
// 3. input variable into temp conversion formula
// 4. print answer

const rl = readline.createInterface({
    input: stdin,
    output: stdout
});

const ftemp = await rl.question(
    "What is the temperature in Fahrenheit? " 
);

// C = 5/9(F-32)
const ctemp = Math.round(((5/9)*(ftemp -32)));

console.log(
    `The temperature in Fahrenheit is ${ftemp}`
);

console.log(
    `The temperature in Celsius is ${ctemp}`
);

rl.close();
