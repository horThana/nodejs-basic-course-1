
// ## Exercise:

// 1. Write text "Hello world" to `data.txt`

// 2. Append text "Second line" to the 2nd line of data.txt

//    - The previous text must remain on the first line.

// 3. Read the whole file, then `console.log` the file content.

// 4. Test and see if it works as expected


import fs from 'fs' ;

fs.writeFileSync("text.txt", "หงส์ไทย 2023");
fs.appendFileSync("text.txt", "bleand 285")
// fs.writeFileSync("twotext.txt", "Node.jssjsjs")

const result = fs.readFileSync("text.txt");
// const result = fs.readFileSync("text.txt","twotext.txt");

console.log(result.toString());
