const arg = process.argv[2];

const errorHandling = (arg) => {
  if (typeof arg !== "string" && arg.trim() === "") {
    console.log("Erreur : Veuillez entrer une chaîne de caractères valide!");
    process.exit(1);
  }
};

const containNumber = (arg) => {
  errorHandling(arg);
  let value = String(arg);
  for (let i = 0; i < value.length; i++) {
    if (value[i] >= 0 && value[i] <= 9) {
      return true;
    }
  }
  return false;
};

console.log(containNumber(arg));
