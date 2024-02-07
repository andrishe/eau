const readline = require("readline-sync");

const minNumber = () => {
  const number = readline.question("Entrez des chiffres : ");
  let numberArray = number.split(" ").map(Number);

  let minimum = Math.min(...numberArray);

  return minimum;
};

minNumber();
