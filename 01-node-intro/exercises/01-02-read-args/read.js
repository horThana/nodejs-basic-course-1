import fs from 'fs';

const content = fs.readFileSync("data.txt");

console.log(content.toString());