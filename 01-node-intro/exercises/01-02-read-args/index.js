


// const args = process.argv;

// const num = parseInt(args[2], 10);

// console.log(typeof num)
// console.log(num + 2
// const args = process.argv;


// console.log(args[2]);
// console.log(args[3]);

// const args = process.argv;

// const name = args[2];

// console.log(`Hello, ${name}!`);


// const args = process.argv;

// const num = args[2];

// console.log(num * 2);

// const args = process.argv;

// const option = args[2];
// const input = args[3];

// if (option === "hello") {
//     console.log(`Hello, ${input} 🍔`);
// } else if (option === "bye") {
//     console.log(`Bye , ${input} 🥚`);
// }

//get Argument

import fs from 'fs';

const args = process.argv;
console.log(args[2]);

const input = args[2];

fs.writeFileSync("data.txt", input);
