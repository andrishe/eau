const readline = require("readline-sync");

const majStr = () => {
  const str = readline.question("Entrez un mot : ");
  const strArray = str.split(" ");

  if (str <= "" || str !== String) {
    console.log("Erreur : Veuillez entrer un mot!");
    process.exit(0);
  }

  for (let i = 0; i < strArray.length; i++) {
    let indStr = strArray[i];

    let newStr = "";
    for (let j = 0; j < indStr.length; j++) {
      if (j % 1 === 1) {
        newStr += indStr[j].toUpperCase();
      } else {
        newStr += indStr[j];
      }
    }
    strArray[i] = newStr;
  }
  return strArray.join(" ");
};

console.log(majStr());
