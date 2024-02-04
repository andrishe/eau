const readline = require("readline-sync");

const containNumber = (str) => {
  let value = String(str);
  for (let i = 0; i < value.length; i++) {
    if (!isNaN(value.charAt(i)) && !(value.charAt(i) === " ")) {
      return true;
    }
  }
  return false;
};
const str = readline.question("Entrez une phrase : ");
console.log(containNumber(str));
