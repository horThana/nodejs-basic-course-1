// import fs from 'fs';

// const filePath = "data.txt";

// export function write(input){
//   fs.appendFileSync(filePath, input + "\n")
//   console.log("Appended :", input);
//   // printHeader();
// }
import fs from 'fs';
// import { printHeader } from '../../solutions/02-01-project-todo-simple/utils';

const filePath = "data.txt";

export function write(input) {
  fs.appendFileSync(filePath, input + '\n');

  // printHeader();
  console.log("appended:", input);
}

export function read() {
  const content = fs.readFileSync(filePath);
  const text = content.toString();
  const list = text.trim().split('\n'); // Fix the split separator


  console.log(`Total todos: ${list.length}\n`);
  for(let i = 0; i < list.length; i++) { // Change the condition to "<" instead of "<="
    console.log(`${i + 1}. ${list[i]}`);
  }
}

export function clear() {
  fs.writeFileSync(filePath, "");

  console.log("file has clear !")
}