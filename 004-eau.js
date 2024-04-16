const arg = parseInt(process.argv[2]);

const errorHandling = (arg) => {
  if (isNaN(arg) || arg < 0 || typeof arg === "string") {
    console.log("Erreur : Veuillez entrer un nombre !");
    process.exit(1);
  }
};

const Fibonacci = (arg) => {
  errorHandling(arg);

  const numberArray = [];
  numberArray[0] = 0;
  numberArray[1] = 1;

  for (let i = 2; i < arg; i++) {
    numberArray[i] = numberArray[i - 1] + numberArray[i - 2];
  }

  return numberArray;
};
console.log(Fibonacci(arg));
