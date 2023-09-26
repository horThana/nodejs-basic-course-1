import fs from "fs";
const filePath = "data.txt";


// const option = process.argv[2]
// const input = process.argv[3];

export function write(input) {
  fs.appendFileSync(filePath, input + "\n");
  console.log("appended:", input);
}

export function read() {
  const content = fs.readFileSync(filePath);
  console.log("file content:", content.toString());
}

export function reset() {
  fs.writeFileSync(filePath, "");
  console.log("the file has been clear");
}