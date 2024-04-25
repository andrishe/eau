const arg = process.argv.slice(2).join(" ");

const errorHandling = (arg) => {
  if (typeof arg !== "string" || arg.trim() === "") {
    console.log("Erreur : Veuillez entrer une chaîne de caractères valide!");
    process.exit(1);
  }
};

const majToSentenceASCII = (arg) => {
  errorHandling(arg);

  let newStr = "";
  let capitalizeArg = true;

  for (let i = 0; i < arg.length; i++) {
    const charCode = arg.charCodeAt(i);

    if (charCode >= 97 && charCode <= 122 && capitalizeArg) {
      newStr += String.fromCharCode(charCode - 32);
      capitalizeArg = false;
    } else if (charCode >= 65 && charCode <= 90 && !capitalizeArg) {
      newStr += String.fromCharCode(charCode + 32);
    } else {
      newStr += arg[i];
    }

    if (arg[i] === " ") {
      capitalizeArg = true;
    }
  }

  return newStr;
};

console.log(majToSentenceASCII(arg));
