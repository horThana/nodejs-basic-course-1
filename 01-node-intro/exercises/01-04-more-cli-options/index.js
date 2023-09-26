import fs from "fs";

const filePath = "data.txt";

const option = process.argv[2];
const input = process.argv[3];

if (option === "w") {
  fs.appendFileSync(filePath, input + "\n");
  console.log("appended:", input);
} else if (option === "r"){
  const read = fs.readFileSync(filePath)
  console.log('filecontext ::',read.toString());
}else if (option === "c"){
  fs.writeFileSync(filePath," ")
  console.log("Clear file complete!")
}else if (option === "d"){
  // read file
  const read = fs.readFileSync(filePath);
  console.log(read.toString());

  //write all
  fs.appendFileSync(filePath, read);
  console.log("show time::");
 
}else{
   console.log("invalid option");
}

