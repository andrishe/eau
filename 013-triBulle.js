const readline = require("readline-sync");

const bubbleSort = () => {
  const number = readline.question("Entrez des chiffres : ");
  let numberArray = number.split(" ").map(Number);

  if (numberArray.some(isNaN)) {
    console.log("Erreur : Veuillez entrer des chiffres valides!");
    process.exit(1);
  }

  //   numberArray.sort((a, b) => -(a < b));
  for (let i = 0; i < numberArray.length; i++) {
    for (let j = 0; j < numberArray.length - i - 1; j++) {
      if (numberArray[j] > numberArray[j + 1]) {
        let bubble = numberArray[j];
        numberArray[j] = numberArray[j + 1];
        numberArray[j + 1] = bubble;
      }
    }
  }

  return console.log(numberArray);
};

bubbleSort();
