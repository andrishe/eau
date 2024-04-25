const arg = process.argv.slice(2).join(" ");

const errorHandling = (arg) => {
  if (typeof arg !== "string" || arg.trim() === "") {
    console.log("Erreur : Veuillez entrer deux chaînes de caractères valides!");
    process.exit(1);
  }
};

const strUpperCase = (arg) => {
  errorHandling(arg);

  let newStr = "";
  let capitalizeArg = true;

  for (let i = 0; i < arg.length; i++) {
    if (
      (arg[i].charCodeAt(0) >= 65 && arg[i].charCodeAt(0) <= 90) ||
      (arg[i].charCodeAt(0) >= 97 && arg[i].charCodeAt(0) <= 122)
    ) {
      if (capitalizeArg) {
        if (arg[i].charCodeAt(0) >= 97 && arg[i].charCodeAt(0) <= 122) {
          newStr += String.fromCharCode(arg[i].charCodeAt(0) - 32);
        } else {
          newStr += arg[i];
        }
      } else {
        newStr += arg[i];
      }
      capitalizeArg = !capitalizeArg;
    } else {
      newStr += arg[i];
    }
  }

  newStr += " ";

  return newStr;
};

console.log(strUpperCase(arg));
