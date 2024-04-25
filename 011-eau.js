const arg = process.argv.slice(2).join(" ");

const errorHandling = (arg) => {
  if (typeof arg !== "string" || arg.trim() === "") {
    console.log("Erreur : Veuillez entrer une chaîne de caractères valide!");
    process.exit(1);
  }
};

const foundIndex = (strIndex, searchStr) => {
  for (let i = 0; i < strIndex.length; i++) {
    if (strIndex[i] === searchStr) {
      return i;
    }
  }
  console.log(" -1 L'élément recherché n'a pas été trouvé dans le tableau.");
  return -1;
};

const indexWanted = (arg) => {
  errorHandling(arg);

  const strArray = arg.split(" ");

  const searchStr = strArray[strArray.length - 1];

  const strIndex = foundIndex(strArray.slice(0, -1), searchStr);

  if (strIndex !== -1) {
    return strIndex;
  } else {
    return -1;
  }
};

console.log(indexWanted(arg));
