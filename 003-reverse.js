const readline = require("readline-sync");

const reversed = () => {
  let str = readline.question("Entrez une phrase : ");
  let strArray = str.split(" ");
  console.log(strArray.reverse().join(" "));
};

reversed();
