const errorHandling = (arg) => {
  if (typeof arg !== "string" || arg.trim() === "") {
    console.log("Erreur : Veuillez entrer une chaîne de caractères valide!");
    process.exit(1);
  }
};

const includeStr = (arg, str) => {
  errorHandling(arg);

  for (let i = 0; i <= arg.length - str.length; i++) {
    let strFound = true;
    for (let j = 0; j < str.length; j++) {
      if (arg[i + j] !== str[j]) {
        strFound = false;
      }
    }
    if (strFound) {
      return true;
    }
  }
  return false;
};

const arg = process.argv[2];
const str = process.argv[3];
console.log(includeStr(arg, str));
