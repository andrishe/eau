const readline = require("readline-sync");

const sortSelected = () => {
  const number = readline.question("Entrez des chiffres : ");
  let numberArray = number.split(" ").map(Number);

  if (numberArray.some(isNaN)) {
    console.log("Erreur : Veuillez entrer des chiffres valides!");
    process.exit(1);
  }

  for (let i = 0; i < numberArray.length - 1; i++) {
    let minSort = i;
    for (let j = i + 1; j < numberArray.length; j++) {
      if (numberArray[j] < numberArray[minSort]) {
        minSort = j;
      }
    }

    if (minSort != i) {
      let numbSort = numberArray[i];
      numberArray[i] = numberArray[minSort];
      numberArray[minSort] = numbSort;
    }
  }

  return console.log(numberArray);
};

sortSelected();
