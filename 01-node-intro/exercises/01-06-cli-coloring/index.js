import { write, read, clear } from "./utils.js";
import clc from "cli-color";

const option = process.argv[2];
const input = process.argv[3];
let msg = clc.xterm(202).bgXterm(236);

if (option === "w") {
  write(input);
} else if (option === "r") {
  read();
} else if (option === "c") {
  clear();
} else {
  console.log(msg("invalid option"));
}
