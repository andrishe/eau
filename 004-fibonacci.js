const readline = require("readline-sync");

const Fibonacci = () => {
  const numberArray = [];
  numberArray[0] = 0;
  numberArray[1] = 1;

  for (let i = 2; i < number; i++) {
    numberArray[i] = numberArray[i - 1] + numberArray[i - 2];
  }
  if (number < 0 || number === String) {
    console.log("Erreur : Veuillez entrer un nombre !");
    process.exit(0);
  }

  return numberArray;
};
const number = readline.questionInt("Entrez un nombre : ");
const numberFibo = Fibonacci(number);
console.log(numberFibo);
