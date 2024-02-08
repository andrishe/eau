const readline = require("readline-sync");

const minAbsoluteNumber = () => {
  const number = readline.question("Entrez des chiffres : ");
  let numberArray = number.split(" ").map(Number);

  if (numberArray.some(isNaN)) {
    console.log("Erreur : Veuillez entrer des chiffres valides!");
    process.exit(1);
  }

  let minimum = Math.abs(numberArray[0] - numberArray[1]);

  for (let i = 0; i < numberArray.length - 1; i++) {
    for (let j = i + 1; j < numberArray.length; j++) {
      const numberAbs = Math.abs(numberArray[i] - numberArray[j]);

      if (numberAbs < minimum) {
        minimum = numberAbs;
      }
    }
  }

  return console.log(minimum);
};

minAbsoluteNumber();
