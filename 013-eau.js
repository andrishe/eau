const arg = process.argv.slice(2);

const errorHandling = (arg) => {
  for (let i = 0; i < arg.length; i++) {
    if (isNaN(arg[i]) || arg[i].trim() === "") {
      console.log("Erreur : Veuillez entrer un nombre valide!");
      process.exit(1);
    }
  }
};

const bubbleSort = (arg) => {
  errorHandling(arg);
  let numberArray = arg;

  for (let i = 0; i < numberArray.length; i++) {
    for (let j = 0; j < numberArray.length - i - 1; j++) {
      if (numberArray[j] > numberArray[j + 1]) {
        let bubble = numberArray[j];
        numberArray[j] = numberArray[j + 1];
        numberArray[j + 1] = bubble;
      }
    }
  }

  return console.log(numberArray.join(" "));
};

bubbleSort(arg);
