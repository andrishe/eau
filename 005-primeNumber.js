const readline = require("readline-sync");

const maxPrimeNumber = (number) => {
  if (number <= 1 || number === String) {
    console.log("Erreur : Veuillez entrer un nombre !");
    process.exit(0);
  }
  for (let maxNumber = number + 1; ; maxNumber++) {
    let primeNumber = true;
    for (let i = 2; i <= Math.sqrt(maxNumber); i++) {
      if (maxNumber % i === 0) {
        primeNumber = false;
        break;
      }
    }
    if (primeNumber) {
      return maxNumber;
    }
  }
};

const number = readline.questionInt("Entrez un nombre : ");
const primeMaxResult = maxPrimeNumber(number);
console.log(primeMaxResult);
