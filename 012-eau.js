const arg = process.argv.slice(2);

const errorHandling = (arg) => {
  for (let i = 0; i < arg.length; i++) {
    if (!isNumeric(arg[i])) {
      console.log("Erreur : Veuillez entrer un nombre valide!");
      process.exit(1);
    }
  }
};

const isNumeric = (value) => {
  return /^-?\d+(\.\d+)?$/.test(value);
};

const valueAbsolute = (num) => {
  if (!isNumeric(num)) {
    console.log("Erreur : Veuillez entrer un nombre valide!");
    process.exit(1);
  }

  if (num < 0) {
    return -num;
  }
  return num;
};

const minAbsoluteNumber = (arg) => {
  errorHandling(arg);

  let numberArray = [];

  for (let i = 0; i < arg.length; i++) {
    numberArray.push(Number(arg[i]));
  }

  let minimum = valueAbsolute(numberArray[0] - numberArray[1]);

  for (let i = 0; i < numberArray.length - 1; i++) {
    for (let j = i + 1; j < numberArray.length; j++) {
      const numberAbs = valueAbsolute(numberArray[i] - numberArray[j]);

      if (numberAbs < minimum) {
        minimum = numberAbs;
      }
    }
  }

  return console.log(minimum);
};

minAbsoluteNumber(arg);
