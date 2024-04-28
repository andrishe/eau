const arg = process.argv.slice(2);

const errorHandling = (arg) => {
  for (let i = 0; i < arg.length; i++) {
    if (isNaN(arg[i]) || arg[i].trim() === "") {
      console.log("Erreur : Veuillez entrer un nombre valide!");
      process.exit(1);
    }
  }
};

const sortSelected = (arg) => {
  errorHandling(arg);

  const numberArray = arg;
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

  return console.log(numberArray.join(" "));
};

sortSelected(arg);
