const arg = parseInt(process.argv[2]);

const errorHandling = (arg) => {
  if (arg <= 0 || isNaN(arg)) {
    console.log("Erreur : -1");
    process.exit(1);
  }
};

const maxPrimeNumber = (arg) => {
  errorHandling(arg);

  for (let maxNumber = arg + 1; ; maxNumber++) {
    let primeNumber = true;
    for (let i = 2; i <= maxNumber / 2; i++) {
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

console.log(maxPrimeNumber(arg));
