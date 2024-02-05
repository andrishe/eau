const readline = require("readline-sync");

const minMax = (min, max) => {
  if (isNaN(min) || isNaN(max)) {
    console.log("Erreur : Veuillez entrer un nombre!");
    process.exit(0);
  }
  for (let i = min; i <= max; i++) {
    console.log(i);
  }
};

const numberMin = readline.question("Entrez un chiffre : ");
const numberMax = readline.question("Entrez un chiffre : ");

minMax(numberMin, numberMax);
