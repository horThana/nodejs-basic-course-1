import fs from "fs";
import {write} from './utils.js'
import {read} from './utils.js'
import {reset} from "./utils.js";

const filePath = "data.txt";
const option = process.argv[2];
const input = process.argv[3];

if (option === "w") {
  write(input);
} else if (option === "r") {
  read();
} else if (option === "c") {
  reset();
} else {
  console.log("invalid option");
}


