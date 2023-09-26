// import fs from "fs";

// const filePath = "data.txt";

// const option = process.argv[2]
// const input = process.argv[3];

// if (option === 'w') {
  
//   fs.appendFileSync(filePath, input + "\n");
//   console.log(`appended:, ${input}`);
// } else {
//   console.log("ivaild option");

// }



import fs from 'fs';

const filePath = "data.txt";

const input = process.argv[2];
const option = process.argv[3];

if(option === 'w') {
   fs.appendFileSync(filePath,input + "\n")
} else {
  console.log("invalide option")
}

console.log(process.argv);
