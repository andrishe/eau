const arg = process.argv[2];
const arg2 = process.argv[3];

const errorHandling = (arg, arg2) => {
  if (typeof arg !== "string" || typeof arg2 !== "string") {
    console.log("Erreur : Veuillez entrer deux chaînes de caractères valides!");
    process.exit(1);
  }
};

const minMax = (arg, arg2) => {
  errorHandling(arg, arg2);

  let min = Number(arg);
  let max = Number(arg2);

  if (min > max) {
    [min, max] = [max, min];
  }

  for (let i = min; i < max; i++) {
    console.log(i);
  }
};

minMax(arg, arg2);
